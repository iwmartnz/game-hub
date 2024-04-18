import { cn } from '@/utils/style';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
    className: string;
    link?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    onClick?: () => void;
};

export default function Button({
    children,
    className,
    link,
    href,
    disabled,
    target,
    onClick,
}: ButtonProps) {
    return (
        <>
            {link ? (
                <Link
                    href={href}
                    target={target}
                    disabled={disabled}
                    className={cn(
                        ' border-[1px] border-white/10 bg-black/20 text-brand-white  shadow-sm shadow-black/15 outline-0 ring-0 backdrop-blur-sm duration-300 hover:scale-110 disabled:opacity-20',
                        className
                    )}
                >
                    {children}
                </Link>
            ) : (
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className={cn(
                        ' border-[1px] border-white/10 bg-black/20 text-brand-white shadow-sm  shadow-black/15 outline-0 ring-0 backdrop-blur-sm duration-300 hover:scale-110 hover:text-brand-accent disabled:opacity-20',
                        className
                    )}
                >
                    {children}
                </button>
            )}
        </>
    );
}
