import Link from 'next/link';
import Image from 'next/image';

import Platforms from '@/components/Platforms';
import { Platform } from '@/types';

type GameCardProps = {
    game: {
        name: string;
        slug: string;
        image: string;
        metacritic: string;
        platforms: Platform[];
    };
};

export default function GameCard({ game }: GameCardProps) {
    let { name, slug, image, metacritic, platforms } = game;
    return (
        <Link
            href={`/games/${slug}`}
            className=' relative flex aspect-[8/9] h-auto w-full flex-col overflow-hidden rounded-3xl shadow-md'
        >
            <figure className=' h-full min-w-full overflow-hidden'>
                <Image
                    src={image}
                    width={400}
                    height={300}
                    alt={name}
                    className='relative h-full w-full object-cover'
                />
            </figure>
            <div className='from-brand-black via-brand-black/70 to-brand-black/0 absolute bottom-0 min-h-2 w-full bg-gradient-to-t p-4'>
                <div className=' flex items-start justify-between'>
                    <Platforms platforms={platforms} />
                    {metacritic && (
                        <span className=' flex h-6 w-8 items-center justify-center rounded-md border-[1px] border-green-400 text-base text-green-400 drop-shadow-md'>
                            {metacritic}
                        </span>
                    )}
                </div>
                <div className=' text-brand-white text-lg font-medium drop-shadow-md md:text-xl'>
                    {name}
                </div>
            </div>
        </Link>
    );
}
