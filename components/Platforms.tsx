'use client';
import type { Platform } from '@/types/index';
import stringToIcon from '@/utils/stringToIcon';
import Image from 'next/image';

type PlatformProps = {
    platforms: Platform[];
    iconSize?: number;
};

type Icon = {
    src: string;
    height: number;
    width: number;
    blurWidth: number;
    blurHeight: number;
};

export default function Platforms({ platforms, iconSize = 15 }: PlatformProps) {
    //StringsToIcon function takes the string value and assigns the icon that matches the platform name
    const platformIcons: any = stringToIcon(platforms);
    return (
        <ul className=' flex h-8 min-w-fit'>
            <li className='flex items-center gap-2'>
                {platformIcons.map(
                    (platform: any) =>
                        platform.src && (
                            <Image
                                src={platform.src}
                                alt=''
                                width={iconSize}
                                height={iconSize}
                                key={platform}
                                className=' drop-shadow-md'
                            />
                        )
                )}
            </li>
        </ul>
    );
}
