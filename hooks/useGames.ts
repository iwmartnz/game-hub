import { getGamesByTitle } from '@/services/games';
import { Game } from '@/types';
import { useMemo, useState, useRef, ChangeEvent } from 'react';

export function useGames({ search }: { search: string }) {
    const [games, setGames] = useState<Game[] | []>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const [isFirstSearch, setIsFirstSearch] = useState(false);
    const previousSearch = useRef(search);

    const getGames = useMemo(() => {
        return async ({ search }: { search: string }) => {
            if (search === previousSearch.current) return;

            try {
                setLoading(true);
                setError(false);
                setIsFirstSearch(true);
                previousSearch.current = search;
                const newGames = await getGamesByTitle(search);
                setGames(newGames);
            } catch (e: any) {
                setError(true);
                console.log(e);
            } finally {
                setLoading(false);
            }
        };
    }, []);

    const removeGames = () => {
        setGames([]);
    };

    return { games, loading, error, getGames, removeGames };
}
