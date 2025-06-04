

import screenWidth  from '@/consts/resposive';
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
    children: ReactNode;
} & React.ComponentProps<"div">

const Container = ({ children,className, ...props }: ContainerProps) => {
    
    return (
        <div className={twMerge(`min-[${screenWidth.desktop}]:bg-red-500` ,className)} {...props}>
            {`${screenWidth.mobile}`}
            {children}
        </div>
    )
}

export default Container