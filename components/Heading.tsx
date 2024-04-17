import { cn } from '@/utils/style';
import { ReactNode } from 'react';

type HeadingProps = {
    children: string | ReactNode;
    className?: string;
    variant: 'heading' | 'subheading' | 'meta';
    subHeading?: boolean;
    metaHeading?: boolean;
};

export default function Heading({
    children,
    className,
    variant,
}: HeadingProps) {
    return (
        <>
            {variant == 'heading' && (
                <h1
                    className={cn(
                        ' text-4xl font-semibold text-brand-white lg:text-7xl',
                        className
                    )}
                >
                    {children}
                </h1>
            )}
            {variant == 'subheading' && (
                <h2
                    className={cn(
                        'text-xl  font-bold text-brand-white lg:text-2xl',
                        className
                    )}
                >
                    {children}
                </h2>
            )}
            {variant == 'meta' && (
                <h2 className={cn('  font-medium text-white/30', className)}>
                    {children}
                </h2>
            )}
        </>
    );
}
