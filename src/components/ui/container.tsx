

import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
type ContainerProps = {
    children: ReactNode;
    
} & React.ComponentProps<"div">

const Container = ({ children,className, ...props }: ContainerProps) => {
    
    
    return (
        <div className={twMerge('font-semibold max-sm:px-6 max-md:px-20 max-lg:px-60 min-lg:px-100 transition-[3s] flex flex-col items-end justify-start h-svh',className)} {...props}>
            {children}
        </div>
    )
}

export default Container