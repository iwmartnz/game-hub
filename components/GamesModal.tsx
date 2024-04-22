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
                className='absolute top-14 z-10 max-h-[600px] min-h-80 w-full overflow-y-scroll rounded-3xl border-[1px] border-white/10 bg-brand-base/90 backdrop-blur-md'
            >
                {loading ? (
                    <div className=' p-6'>
                        <Skeleton variant='list' />
                    </div>
                ) : games.length > 0 ? (
                    <ul className=' flex flex-col gap-4 p-6'>
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
                                                    iconColor='light'
                                                    iconSize='14px'
                                                    className='h-auto'
                                                />
                                            )}
                                            <Link
                                                href={`/games/${game.slug}`}
                                                onClick={closeModal}
                                                className=' font-bold '
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
                            <div className='p-6'>Failed to load games</div>
                        ) : (
                            <div className='p-6'>No games found</div>
                        )}
                    </>
                )}
            </motion.div>
        </>
    );
}
