import React, { ReactNode } from 'react';
import Skeleton from './Skeleton';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Game = {
    id: number;
    slug: string;
    name: string;
    image: string;
};

type ModalProps = {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    loading: boolean;
    games: Game[] | [];
};
export default function GamesModal({
    isOpen,
    setIsOpen,
    loading,
    games,
}: ModalProps) {
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, height: '0%' }}
                animate={{
                    opacity: 1,
                    height: 'auto',
                }}
                transition={{ duration: 0.7 }}
                autoFocus={isOpen}
                className='absolute top-6 z-10 max-h-[1300px] min-h-80 w-full overflow-y-scroll rounded-b-3xl bg-white/80 backdrop-blur-md'
            >
                {loading ? (
                    <div className=' px-4 pb-4 pt-12'>
                        <Skeleton variant='list' />
                    </div>
                ) : (
                    games && (
                        <ul className=' flex flex-col gap-4 px-4 pb-4 pt-12 '>
                            {games.map((game) => (
                                <div
                                    key={game.id}
                                    className='flex items-center gap-3'
                                >
                                    <figure className=' aspect-square h-10 w-10 overflow-hidden rounded-md object-cover'>
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

                                    <Link
                                        href={`/games/${game.slug}`}
                                        onClick={closeModal}
                                        className='font-medium text-brand-black'
                                    >
                                        {game.name}
                                    </Link>
                                </div>
                            ))}
                        </ul>
                    )
                )}
            </motion.div>
        </>
    );
}
