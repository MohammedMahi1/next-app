import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
    children: ReactNode;
} & React.ComponentProps<"button">

const Button = ({ children, className, ...props }: ButtonProps) => {
    return (
        <button
            className={twMerge("outline-none w-fit px-8 py-4 bg-black rounded-xl border-gray-500 border-2 text-white cursor-pointer", className)}
            {...props}>
                {children}
            </button>
    )
}

export default Button