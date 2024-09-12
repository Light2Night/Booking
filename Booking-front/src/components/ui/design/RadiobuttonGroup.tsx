import { UseFormRegisterReturn } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { getPublicResourceUrl } from "utils/publicAccessor.ts";

const RadiobuttonGroup = (props: {
    formRegisterReturn?: UseFormRegisterReturn,
    isError?: boolean,
    options: Array<{
        title: string,
        value: string
    }>
}) => {
    const [checkedValue, setCheckedValue] = useState("");

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setCheckedValue(event.target.value);
    };

    const className = props.isError
        ? "radiobutton-title-error"
        : "radiobutton-title-default";

    const pathToCheckedImage = getPublicResourceUrl(props.isError
        ? "radiobutton/circle-filled-red.svg"
        : "radiobutton/circle-filled-black.svg");

    const pathToUncheckedImage = getPublicResourceUrl(props.isError
        ? "radiobutton/circle-empty-red.svg"
        : "radiobutton/circle-empty-black.svg");

    return (
        <div className="flex flex-row justify-evenly">
            {props.options.map((option) => (
                <label key={option.value} className={`radiobutton-item ${className}`}>
                    <input
                        type="radio"
                        className="hidden"
                        value={option.value}
                        onChange={handleChange}
                        onClick={() => setCheckedValue(option.value)}
                        {...props.formRegisterReturn}
                    />
                    <img
                        className="radiobutton-icon"
                        src={checkedValue === option.value ? pathToCheckedImage : pathToUncheckedImage}
                        alt="icon"
                    />
                    {option.title}
                </label>
            ))}
        </div>
    );
};

export default RadiobuttonGroup;