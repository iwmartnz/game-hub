import { Suspense } from 'react';
import Link from 'next/link';

import Description from '@/components/Description';
import Gallery from '@/components/Gallery';
import Heading from '@/components/Heading';
import Platforms from '@/components/Platforms';
import GameImage from '@/components/GameImage';
import Skeleton from '@/components/Skeleton';
import Meta from '@/components/Meta';
import Button from '@/components/Button';
import { ExternalIcon } from '@/components/Icon';

import { getGameDetails, getGameScreenshots } from '@/services/games';
import { Game } from '@/types';
import type { Metadata } from 'next';

type PageProps = {
    params: { id: string };
};

type Screenshot = {
    id: number;
    image: string;
    width: number;
    height: number;
    is_deleted: boolean;
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    // read route params
    const id = params.id;

    // fetch data
    const game: any = await getGameDetails(id);

    return {
        title: `${game.name} | Game Hub`,
        description: game.description,
    };
}

export default async function GamePage({ params }: PageProps) {
    const game: Game = await getGameDetails(params.id);
    const screenshots: Screenshot[] = await getGameScreenshots(params.id);
    return (
        <main className='flex flex-col gap-4 overflow-hidden pt-6 lg:flex-row'>
            <div className='lg:w-7/12'>
                {game.platforms && game.platforms.length > 0 && (
                    <Platforms
                        platforms={game.platforms}
                        iconColor='light'
                        iconSize='18px'
                    />
                )}
                <Heading variant='heading'>{game?.name}</Heading>
                <Heading variant='subheading' className='pb-2 pt-4'>
                    About
                </Heading>
                <Description rawDescription={game.description} />
                <Meta game={game} />
            </div>
            <div className=' lg:w-5/12'>
                <Suspense fallback={<Skeleton variant='gallery' />}>
                    <GameImage image={game.image} />
                    {screenshots && screenshots.length > 0 && (
                        <Gallery screenshots={screenshots} />
                    )}
                    {game.website && (
                        <Button
                            className='mt-6 flex h-12 w-full items-center justify-center gap-1 rounded-full hover:scale-100 hover:text-brand-accent'
                            link
                            target='_blank'
                            href={game.website}
                        >
                            Website <ExternalIcon />
                        </Button>
                    )}
                </Suspense>
            </div>
        </main>
    );
}
