import { cn } from '@/utils/style';
import { ReactNode } from 'react';

type HeadingProps = {
    children: string | ReactNode;
    className?: string;
    type: 'heading' | 'subheading' | 'meta';
    subHeading?: boolean;
    metaHeading?: boolean;
};

export default function Heading({ children, className, type }: HeadingProps) {
    return (
        <>
            {type == 'heading' && (
                <h1
                    className={cn(
                        ' text-brand-white text-4xl font-semibold lg:text-7xl',
                        className
                    )}
                >
                    {children}
                </h1>
            )}
            {type == 'subheading' && (
                <h2
                    className={cn(
                        'text-brand-white  text-xl font-bold lg:text-2xl',
                        className
                    )}
                >
                    {children}
                </h2>
            )}
            {type == 'meta' && (
                <h2
                    className={cn(
                        'text-brand-white  text-xl font-bold lg:text-2xl',
                        className
                    )}
                >
                    {children}
                </h2>
            )}
        </>
    );
}
