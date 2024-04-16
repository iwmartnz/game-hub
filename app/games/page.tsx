import { Suspense } from 'react';

import GameCard from '@/components/GameCard';
import Grid from '@/components/Grid';
import Heading from '@/components/Heading';
import Skeleton from '@/components/Skeleton';

import { getAllGames } from '@/services/games';
import { Game } from '@/types';

export default async function GamesPage() {
    const games: Game[] = await getAllGames();
    return (
        <main className='w-full space-y-2'>
            <Heading variant='heading'>All Games</Heading>
            <Suspense fallback={<Skeleton variant='grid' />}>
                <Grid className='py-6'>
                    {games.map((game) => (
                        <li key={game.id}>
                            <GameCard game={game} />
                        </li>
                    ))}
                </Grid>
            </Suspense>
        </main>
    );
}
