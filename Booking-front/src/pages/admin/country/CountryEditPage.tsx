import { IconCirclePlus, IconCircleX } from "@tabler/icons-react";
import ImageUpload from "components/ImageUpload.tsx";
import { Button } from "components/ui/Button.tsx";
import FormError from "components/ui/FormError.tsx";
import { Input } from "components/ui/Input.tsx";
import Label from "components/ui/Label.tsx";
import { CountryEditSchema, CountryEditSchemaType } from "interfaces/zod/country.ts";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useGetCountryQuery, useUpdateCountryMutation } from "services/country.ts";
import showToast from "utils/toastShow.ts";
import { zodResolver } from "@hookform/resolvers/zod";

import { ChangeEvent, useEffect, useRef, useState } from "react";
import { API_URL } from "utils/getEnvData.ts";
import { instantScrollToTop } from "utils/scrollToTop.ts";

const CountryEditPage: React.FC = () => {
    useEffect(instantScrollToTop, []);

    const { id } = useParams();
    const { data: countryData } = useGetCountryQuery(id as string);
    const [updateCountry, { isLoading }] = useUpdateCountryMutation();

    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm<CountryEditSchemaType>({
        resolver: zodResolver(CountryEditSchema),
    });

    useEffect(() => {
        if (countryData) {
            const country = Array.isArray(countryData) ? countryData[0] : countryData;
            setValue("name", country.name);
            if (country.image) {
                fetch(API_URL + `/images/1200_${country.image}`)
                    .then((response) => response.blob())
                    .then((blob) => {
                        const fileFromApi = new File([blob], "country_image.jpg", { type: blob.type });
                        setFiles([fileFromApi]);
                    });
            }
        }
    }, [countryData, setValue]);

    useEffect(() => {
        if (inputRef.current) {
            const dataTransfer = new DataTransfer();
            files.forEach((file) => {
                if (file instanceof File) {
                    dataTransfer.items.add(file);
                }
            });
            inputRef.current.files = dataTransfer.files;
        }
        setValue("image", inputRef.current?.files as any);
    }, [files, setValue]);

    useEffect(() => {
        if (countryData) {
            const country = Array.isArray(countryData) ? countryData[0] : countryData;
            if (country.image) {
                fetch(API_URL + `/images/1200_${country.image}`)
                    .then((response) => response.blob())
                    .then((blob) => {
                        const fileFromApi = new File([blob], "country_image.jpg", {
                            type: "image/jpeg",
                        });
                        setFiles([fileFromApi]);
                    });
            }
        }
    }, [countryData]);

    useEffect(() => {
        if (countryData) {
            const country = Array.isArray(countryData) ? countryData[0] : countryData;
            fetch(API_URL + `/images/1200_${country.image}`)
                .then((response) => response.blob())
                .then((blob) => {
                    const fileFromApi = new File([blob], "country_image.jpg", {
                        type: "image/jpeg",
                    });
                    setFiles([fileFromApi]);
                });
        }
    }, [countryData]);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files;

        if (file) {
            setFiles((prevFiles) => {
                const updatedFiles = [...prevFiles];
                for (let i = 0; i < file.length; i++) {
                    const validImageTypes = ["image/jpeg", "image/webp", "image/png"];
                    if (validImageTypes.includes(file[i].type)) {
                        updatedFiles[0] = file[i];
                    }
                }
                return updatedFiles.slice(0, 1);
            });
        }
    };

    const removeImage = (file: File) => {
        setFiles(files.filter((x: File) => x.name !== file.name));
    };

    const onSubmit = handleSubmit(async (data) => {
        try {
            await updateCountry({
                id: Number(id),
                name: data.name,
                image: files[0],
            }).unwrap();

            showToast(`Країну успішно оновлено!`, "success");
            navigate("/admin/countries/list");
        } catch (err) {
            showToast(`Помилка при оновленні країни!`, "error");
        }
    });

    const onReset = () => {
        reset();
        setFiles([]);
    };

    if (!countryData) return <p>Країна не знайдена</p>;

    return (
        <div className="container mx-auto flex justify-center mt-5 max-w-4xl mx-auto">
            <div className="w-full ">
                <h1 className="pb-5 text-2xl text-center text-black font-main font-bold">Редагування Країни</h1>
                <div className="flex justify-end mb-4">
                    <Button onClick={() => navigate("/admin/countries/list")} className="border">
                        Назад до списку Країн
                    </Button>
                </div>
                <form className="flex flex-col gap-5" onSubmit={onSubmit}>
                    <div>
                        <Label htmlFor="name">Назва:</Label>
                        <Input
                            {...register("name")}
                            id="name"
                            placeholder="Назва..."
                            className="w-full"
                        />
                        {errors?.name && (
                            <FormError className="text-red-500" errorMessage={errors?.name?.message as string} />
                        )}
                    </div>

                    <div>
                        <Label>Фото:</Label>
                        <div className="relative">
                            <ImageUpload
                                setFiles={setFiles}
                                remove={removeImage}
                                files={files}>
                                <Input
                                    {...register("image")}
                                    onChange={handleFileChange}
                                    multiple
                                    ref={inputRef}
                                    id="image"
                                    type="file"
                                    className="w-full"
                                />
                            </ImageUpload>
                        </div>
                        {errors?.image && (
                            <FormError
                                className="text-red-500"
                                errorMessage={errors?.image?.message as string}
                            />
                        )}
                    </div>

                    <div className="flex w-full items-center justify-center gap-5">
                        <Button
                            disabled={isLoading}
                            size="lg"
                            type="submit"
                            className="hover:bg-sky/70 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <IconCirclePlus />
                            Оновити
                        </Button>
                        <Button
                            disabled={isLoading}
                            size="lg"
                            type="button"
                            onClick={onReset}
                            className="hover:bg-sky/70 disabled:cursor-not-allowed"
                        >
                            <IconCircleX />
                            Скинути
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CountryEditPage;
