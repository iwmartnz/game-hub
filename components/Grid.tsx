import { ReactNode } from 'react';
import { cn } from '@/utils/style';

type GridProps = {
    children: ReactNode;
    className?: string;
};

export default function Grid({ children, className }: GridProps) {
    return (
        <ul
            className={cn(
                ' grid max-h-full w-full grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] justify-items-center gap-4 overflow-y-scroll',
                className
            )}
        >
            {children}
        </ul>
    );
}
