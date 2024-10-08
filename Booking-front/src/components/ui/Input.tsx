import { VariantProps, cva } from "class-variance-authority";
import { classNames } from "utils/classNames.ts";

import * as React from "react";

const inputVariants = cva(
    "text-sm w-full placeholder:text-lightgray font-bold h-full rounded-md  outline-none border ",
    {
        variants: {
            variant: {
                default: "w-full p-3 border border-gray-300 rounded font-normal",
                withIcon: "ps-10 border-white hover:border-yellow",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    },
);

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
        VariantProps<typeof inputVariants> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, variant, type, ...props }, ref) => {
        return (
            <input
                type={type}
                className={classNames(inputVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    },
);


// import { VariantProps, cva } from "class-variance-authority";
// import { classNames } from "utils/classNames.ts";
//
// import * as React from "react";
//
// const inputVariants = cva("text-sm w-full placeholder:text-lightgray font-bold h-full rounded-md  outline-none border", {
//         variants: {
//             variant: {
//                 default: "font-medium font-main",
//                 file: "hidden",
//             },
//             size: {
//                 default: "h-[40px] max-h-[40px] px-4 py-0.5",
//             },
//         },
//         defaultVariants: {
//             variant: "default",
//             size: "default",
//         },
//     },
// );
//
// export interface InputProps
//     extends React.InputHTMLAttributes<HTMLInputElement>,
//         VariantProps<typeof inputVariants> {}
//
// export const Input = React.forwardRef<HTMLInputElement, InputProps>(
//     ({ className, size, variant, type, ...props }, ref) => {
//         return (
//             <input
//                 type={type}
//                 className={classNames(inputVariants({ variant, size, className }))}
//                 ref={ref}
//                 {...props}
//             />
//         );
//     },
// );
