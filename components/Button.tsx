import { cn } from '@/utils/style';
import { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    className: string;
    disabled?: boolean;
    onClick?: () => void;
};

export default function Button({
    children,
    className,
    disabled = false,
    onClick,
}: ButtonProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cn(
                ' border-[1px] border-white/10 bg-black/20 text-brand-white shadow-sm  shadow-black/15 backdrop-blur-sm duration-300 hover:scale-110 hover:text-brand-accent disabled:opacity-20',
                className
            )}
        >
            {children}
        </button>
    );
}
