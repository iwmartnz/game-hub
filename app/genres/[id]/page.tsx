import GameCard from '@/components/GameCard';
import Grid from '@/components/Grid';
import Heading from '@/components/Heading';
import Skeleton from '@/components/Skeleton';
import { getGamesByGenre } from '@/services/games';
import { getGenreDetails } from '@/services/genres';
import parse from 'html-react-parser';

import React, { Suspense } from 'react';
import { Game, Genre } from '@/types';
import Link from 'next/link';
import { Metadata } from 'next';

type PageProps = {
    params: { id: string };
};

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const id = params.id;

    const genre = await getGenreDetails(id);

    return {
        title: genre ? `${genre.name} - Game Hub` : `Game Hub`,
        description: genre?.description,
    };
}

export default async function GenrePage({ params }: PageProps) {
    const genre = await getGenreDetails(params.id);
    const games: Game[] = await getGamesByGenre(params.id);

    return (
        <main className='w-full space-y-2'>
            <Heading type='heading'>{genre?.name}</Heading>
            <div className=' text-brand-gray-light'>
                {genre?.description && parse(genre?.description)}
            </div>
            <Suspense fallback={<Skeleton variant='grid' />}>
                {games && games.length > 0 ? (
                    <Grid className='py-6'>
                        {games.map((game) => (
                            <li key={game.id}>
                                <GameCard game={game} />
                            </li>
                        ))}
                    </Grid>
                ) : (
                    <div>
                        <p>Failed to load games</p>
                        <Link href='/'>Home</Link>
                    </div>
                )}
            </Suspense>
        </main>
    );
}
