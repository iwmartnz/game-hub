import { Suspense } from 'react';

import GameCard from '@/components/GameCard';
import Grid from '@/components/Grid';
import Heading from '@/components/Heading';

import { getGamesbyTag } from '@/services/games';
import { Game } from '@/types';
import Skeleton from '@/components/Skeleton';

export default async function Home() {
    const games: Game[] = await getGamesbyTag('multiplayer');
    return (
        <main className='w-full space-y-2'>
            <Heading variant='heading'>New and trending</Heading>
            <p className=''>Based on player counts and release date</p>
            <Suspense fallback={<Skeleton variant='grid' />}>
                <Grid className='py-6'>
                    {games && games.length > 0 ? (
                        games.map((game) => (
                            <li key={game.id}>
                                <GameCard game={game} />
                            </li>
                        ))
                    ) : (
                        <div>Failed lo load games</div>
                    )}
                </Grid>
            </Suspense>
        </main>
    );
}
