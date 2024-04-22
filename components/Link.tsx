import { ReactNode } from 'react';
import NativeLink from 'next/link';
import { cn } from '@/utils/style';

type LinkProps = {
    children: ReactNode;
    className: string;
    href: string;
    target?: '_blank' | '_parent' | '_top';
};

export default function Link({ children, className, href, target }: LinkProps) {
    return (
        <NativeLink
            href={href}
            target={target}
            className={cn(
                'border-[1px] border-white/10 bg-black/20 text-brand-white shadow-sm  shadow-black/15 backdrop-blur-sm duration-300 hover:scale-110 hover:text-brand-accent disabled:opacity-20',
                className
            )}
        >
            {children}
        </NativeLink>
    );
}
