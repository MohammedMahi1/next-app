

import { cn } from '@/lib/cn';
import { cva, VariantProps } from 'class-variance-authority';
import React, { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge';
type ContainerProps = {
    children: ReactNode;
    

} & React.ComponentProps<"div"> &VariantProps<typeof variants>


const variants = cva(
    [
        'font-semibold',
        'max-sm:px-6',
        'max-md:px-20',
        'max-lg:px-60',
        'min-lg:px-100',
        'transition-[3s]',
        'flex',
        'flex-col',
        'h-[100vh]',
        'w-[100vw]'
    ],
    {
        variants:{
            variant:{
                center:['items-center justify-center'],
                centerLeft:['items-start justify-center'],
                centerRight:['items-end justify-center'],
                Left:['items-start justify-start'],
                Right:['items-end justify-start'],
            }
        }
    }
)
const Container = ({variant, children, className, ...props }: ContainerProps) => {
    return (
        <div className={cn(variants({variant, className}))} {...props}>
            {children}
        </div>
    )
}

export default Container