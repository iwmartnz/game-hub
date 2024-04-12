'use client';
import { ChangeEvent, useEffect, useState } from 'react';
import GamesModal from './GamesModal';

import { useSearch } from '@/hooks/useSearch';
import { useGames } from '@/hooks/useGames';
import { SearchIcon } from './Icon';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { AnimatePresence } from 'framer-motion';

type ApiGame = {
    id: number;
    slug: string;
    name: string;
    background_image: string;
};

type Game = {
    id: number;
    slug: string;
    name: string;
    image: string;
};

export default function Searchbar() {
    const { search, updateSearch, error } = useSearch();
    const { games, getGames, loading, removeGames } = useGames({ search });
    const [isOpen, setIsOpen] = useState(false);
    const ref = useOutsideClick(closeModal);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const newQuery = e.target.value;
        if (newQuery.startsWith(' ')) return;
        if (newQuery.length === 0) {
            setIsOpen(false);
        }
        updateSearch(newQuery);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (search.length > 0) {
            const fetchGames = setTimeout(async () => {
                setIsOpen(true);
                getGames({ search });
            }, 500);

            return () => clearTimeout(fetchGames);
        } else {
            setIsOpen(false);
            removeGames();
        }
    }, [search]);

    return (
        <div
            ref={ref}
            tabIndex={0}
            className='group/search relative flex h-12 w-full flex-1 gap-1'
        >
            <div className=' relative z-20 flex h-full w-full items-center text-brand-gray-light focus-within:text-brand-black hover:text-brand-black'>
                <input
                    type='text'
                    value={search}
                    onChange={handleChange}
                    // onBlur={handleBlur}
                    placeholder='Search 864,398 games'
                    className=' flex h-full flex-1 rounded-full border-2 border-transparent bg-brand-white/20 indent-10 text-sm font-medium shadow-sm outline-0 ring-0 backdrop-blur-sm duration-300 ease-in-out placeholder:text-brand-gray-light hover:bg-brand-white focus:bg-white group-focus/search:bg-brand-white'
                />
                <SearchIcon className='absolute left-3 pt-[3px]' size='18' />
            </div>
            <AnimatePresence>
                {isOpen && (
                    <GamesModal
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        loading={loading}
                        games={games}
                    />
                )}
            </AnimatePresence>
        </div>
    );
}
