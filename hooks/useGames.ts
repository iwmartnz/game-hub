import { getGamesByTitle } from '@/services/games';
import { Game } from '@/types';
import { useMemo, useState, useRef, ChangeEvent } from 'react';

export function useGames({ search }: { search: string }) {
    const [games, setGames] = useState<Game[] | []>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<null | string>('');
    const [isFirstSearch, setIsFirstSearch] = useState(false);
    const previousSearch = useRef(search);

    const getGames = useMemo(() => {
        return async ({ search }: { search: string }) => {
            if (search === previousSearch.current) return;

            try {
                setLoading(true);
                setError(null);
                setIsFirstSearch(true);
                previousSearch.current = search;
                const newGames = await getGamesByTitle(search);
                setGames(newGames);
            } catch (e: any) {
                throw new Error(e.message);
            } finally {
                setLoading(false);
            }
        };
    }, []);

    const removeGames = () => {
        setGames([]);
    };

    return { games, loading, getGames, removeGames };
}
