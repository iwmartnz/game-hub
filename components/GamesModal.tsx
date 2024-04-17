import React, { ReactNode } from 'react';
import Skeleton from './Skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Platforms from './Platforms';
import { Platform } from '@/types';

type Game = {
    id: number;
    slug: string;
    name: string;
    image: string;
    platforms: Platform[];
};

type ModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    error: boolean;
    games: Game[] | [];
};
export default function GamesModal({
    isOpen,
    setIsOpen,
    loading,
    error,
    games,
}: ModalProps) {
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.div
                key='modal'
                initial={{ opacity: 0, height: '0%' }}
                animate={{
                    opacity: 1,
                    height: 'auto',
                    zIndex: 1,
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className='absolute top-6 z-10 max-h-[1300px] min-h-80 w-full overflow-y-scroll rounded-b-3xl bg-white/80 backdrop-blur-md'
            >
                {loading ? (
                    <div className=' px-4 pb-4 pt-12'>
                        <Skeleton variant='list' />
                    </div>
                ) : games.length > 0 ? (
                    <ul className=' flex flex-col gap-4 px-4 pb-4 pt-12 '>
                        {games.map(
                            (game) =>
                                game.image && (
                                    <div
                                        key={game.id}
                                        className='flex items-center gap-2'
                                    >
                                        <figure className=' aspect-square h-12 w-12 overflow-hidden rounded-xl object-cover'>
                                            {game.image && (
                                                <Image
                                                    src={game.image}
                                                    alt={game.name}
                                                    width={40}
                                                    height={40}
                                                    className=' h-full w-full object-cover'
                                                />
                                            )}
                                        </figure>
                                        <div className=' flex h-full flex-col justify-center'>
                                            {game.platforms && (
                                                <Platforms
                                                    platforms={game.platforms}
                                                    iconColor='dark'
                                                    iconSize='xs'
                                                    className='h-auto'
                                                />
                                            )}
                                            <Link
                                                href={`/games/${game.slug}`}
                                                onClick={closeModal}
                                                className=' font-bold text-brand-black'
                                            >
                                                {game.name}
                                            </Link>
                                        </div>
                                    </div>
                                )
                        )}
                    </ul>
                ) : (
                    <>
                        {error ? (
                            <div>Failed to load games</div>
                        ) : (
                            <div>No games found</div>
                        )}
                    </>
                )}
            </motion.div>
        </>
    );
}
