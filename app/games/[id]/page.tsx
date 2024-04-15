import { Suspense } from 'react';
import Description from '@/components/Description';
import Gallery from '@/components/Gallery';
import Heading from '@/components/Heading';
import Platforms from '@/components/Platforms';
import GameImage from '@/components/GameImage';
import Skeleton from '@/components/Skeleton';

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
                <Platforms
                    platforms={game.platforms}
                    iconColor='light'
                    iconSize='sm'
                />
                <Heading type='heading'>{game?.name}</Heading>
                <Heading type='subheading' className='pb-2 pt-4'>
                    About
                </Heading>
                <Description rawDescription={game.description} />
            </div>
            <div className=' lg:w-5/12'>
                <Suspense fallback={<Skeleton variant='gallery' />}>
                    <GameImage image={game.image} />
                    <Gallery screenshots={screenshots} />
                </Suspense>
            </div>
        </main>
    );
}
