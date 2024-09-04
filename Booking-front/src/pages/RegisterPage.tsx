import { Button } from "components/ui/Button.tsx";
import { Input } from "components/ui/Input.tsx";
import { User } from "interfaces/user";
import { useLocation, useNavigate } from "react-router-dom";
import { useRegistrationMutation } from "services/user.ts";
import { useAppDispatch } from "store/index.ts";
import { setCredentials } from "store/slice/userSlice.ts";
import { jwtParser } from "utils/jwtParser.ts";
import showToast from "utils/toastShow.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {RegistrationSchemaType, RegistrationSchema} from "interfaces/zod/user.ts";

import React, {ChangeEvent, useEffect, useRef, useState} from "react";
import Label from "components/ui/Label.tsx";
import ImageUpload from "components/ImageUpload.tsx";
import FormError from "components/ui/FormError.tsx";

const RegisterPage: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useAppDispatch();
    const [registerUser, { isLoading }] = useRegistrationMutation();
    const [files, setFiles] = useState<File[]>([]);
    const inputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<RegistrationSchemaType>({
        resolver: zodResolver(RegistrationSchema),
    });

    useEffect(() => {
        if (inputRef.current) {
            const dataTransfer = new DataTransfer();
            files.forEach((file) => dataTransfer.items.add(file));
            inputRef.current.files = dataTransfer.files;
        }
        setValue("image", inputRef.current?.files as any);
    }, [files, setValue]);

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

    const removeImage = (file: string) => {
        setFiles([]);
    };

    const onSubmit = async (data: RegistrationSchemaType) => {
        try {
            const res = await registerUser(data).unwrap();
            if (res.token === null) {
                showToast(`Помилка реєстрації`, "error");
                return;
            }
            setUser(res.token);
            showToast(`Реєстрація успішна!`, "success");
        } catch (error) {
            showToast(`Помилка реєстраціі. Перевірте ваші дані!`, "error");
        }
    };

    const setUser = (token: string) => {
        localStorage.setItem("authToken", token);
        dispatch(
            setCredentials({
                user: jwtParser(token) as User,
                token: token,
            }),
        );
        const { from } = location.state || { from: { pathname: "/admin" } };
        navigate(from);
        // navigate("/");
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-white rounded w-full max-w-md font-main">
                <h1 className="text-1xl text-center font-main mb-6 font-extrabold">Створення нового Адміна | Ріелтора</h1>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="firstName" className="mb-1 text-sm block font-semibold">
                            Ім'я
                        </label>
                        <Input
                            {...register("firstName")}
                            id="firstName"
                            type="text"
                            placeholder="Введіть ім'я"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="mb-1 text-sm block font-semibold">
                            Прізвище
                        </label>
                        <Input
                            {...register("lastName")}
                            id="lastName"
                            type="text"
                            placeholder="Введіть прізвище"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>
                        )}
                    </div>

                    <div>
                        <Label>Фото:</Label>
                        <ImageUpload setFiles={setFiles} remove={removeImage} files={files}>
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
                        {errors?.image && (
                            <FormError className="text-red" errorMessage={errors?.image?.message as string}/>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="mb-1 text-sm block font-semibold">
                            Електронна пошта
                        </label>
                        <Input
                            {...register("email")}
                            id="email"
                            type="email"
                            placeholder="Введіть електронну адресу"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="username" className="mb-1 text-sm block font-semibold">
                            Ім'я користувача
                        </label>
                        <Input
                            {...register("username")}
                            id="username"
                            type="text"
                            placeholder="Введіть ім'я користувача"
                        />
                        {errors.username && (
                            <p className="text-red-500 text-xs mt-1">{errors.username.message}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="mb-1 text-sm block font-semibold">
                            Пароль
                        </label>
                        <Input
                            {...register("password")}
                            id="password"
                            type="password"
                            placeholder="Введіть пароль"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    <div>
                        <label className="mb-1 text-sm block font-semibold">Тип користувача</label>
                        <div className="flex gap-4">
                            <label className="flex items-center">
                                <input
                                    {...register("type")}
                                    type="radio"
                                    value="Customer"
                                    className="mr-2"
                                />
                                Користувач
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register("type")}
                                    type="radio"
                                    value="Realtor"
                                    className="mr-2"
                                />
                                Ріелтор
                            </label>
                        </div>
                        {errors.type && (
                            <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>
                        )}
                    </div>

                    <Button
                        disabled={isLoading}
                        type="submit"
                        variant="primary"
                        className="w-full mb-6 disabled:cursor-not-allowed"
                    >
                        Зареєструвати
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
