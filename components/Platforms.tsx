'use client';
import type { Platform } from '@/types/index';
import {
    PcIcon,
    PlaystationIcon,
    XboxIcon,
    NintendoIcon,
    AndroidIcon,
    IosIcon,
    MacIcon,
    LinuxIcon,
} from '@/components/Icon';
import iconsFilter from '@/utils/iconsFilter';
import { cn } from '@/utils/style';

type PlatformProps = {
    platforms: Platform[];
    iconSize: string;
    iconColor: 'light' | 'dark';
    className?: string;
};

export default function Platforms({
    platforms,
    iconSize,
    iconColor,
    className,
}: PlatformProps) {
    const icons = iconsFilter(platforms);

    return (
        <ul
            className={cn(
                ' flex h-8 min-w-fit items-center gap-2',
                iconColor === 'light' && 'text-brand-white',
                iconColor === 'dark' && 'text-brand-black',
                className
            )}
        >
            {icons.map((platform) => (
                <li key={platform}>
                    {platform === 'xbox' && <XboxIcon size={iconSize} />}
                    {platform === 'playstation' && (
                        <PlaystationIcon size={iconSize} />
                    )}
                    {platform === 'nintendo' && (
                        <NintendoIcon size={iconSize} />
                    )}
                    {platform === 'pc' && <PcIcon size={iconSize} />}
                    {platform === 'mac' && <MacIcon size={iconSize} />}
                    {platform === 'linux' && <LinuxIcon size={iconSize} />}
                    {platform === 'ios' && <IosIcon size={iconSize} />}
                    {platform === 'android' && <AndroidIcon size={iconSize} />}
                </li>
            ))}
        </ul>
    );
}
