'use client';
import React, { useState } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { MenuIcon } from './Icon';
import { Genre } from '@/types';
import Link from 'next/link';
import Heading from './Heading';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

type MenuProps = {
    genres: Genre[];
};
export default function Menu({ genres }: MenuProps) {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu((prevState) => !prevState);
    }
    return (
        <Popover.Root modal open={showMenu} onOpenChange={toggleMenu}>
            <Popover.Trigger className='relative flex aspect-square h-12 w-12 items-center justify-center rounded-full border-[1px] border-white/10 bg-black/20 shadow-sm backdrop-blur-sm hover:scale-100 hover:bg-brand-base data-[state=open]:text-brand-accent lg:hidden'>
                <MenuIcon size='24px' />
            </Popover.Trigger>
            <Popover.Portal>
                <AnimatePresence>
                    <Popover.Content align='start' sideOffset={8} asChild>
                        <motion.div
                            key='menu'
                            initial={{ opacity: 0, height: '0%' }}
                            animate={{
                                opacity: 1,
                                height: 'auto',
                                zIndex: 1,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className='h-auto max-h-[500px] min-w-40 overflow-y-scroll rounded-3xl border-[1px] border-white/10 bg-brand-base/90 p-4 backdrop-blur-md lg:hidden'
                        >
                            {genres && genres.length > 0 ? (
                                <>
                                    <div className='pb-4 pt-4'>
                                        <Link href='/games'>
                                            <Heading variant='subheading'>
                                                All Games
                                            </Heading>
                                        </Link>
                                    </div>
                                    <Heading
                                        variant='subheading'
                                        className='pb-2 pt-4'
                                    >
                                        Genres
                                    </Heading>
                                    <div>
                                        <ul className=' flex flex-col gap-2'>
                                            {genres.map((genre) => (
                                                <li key={genre.id}>
                                                    {genre.image && (
                                                        <Link
                                                            href={`/genres/${genre.slug}`}
                                                            onClick={toggleMenu}
                                                            className=' flex items-center gap-2 font-medium'
                                                        >
                                                            <figure className=' aspect-square h-8 w-8 overflow-hidden rounded-lg'>
                                                                <Image
                                                                    src={
                                                                        genre.image
                                                                    }
                                                                    alt={
                                                                        genre.name
                                                                    }
                                                                    width={40}
                                                                    height={40}
                                                                    className='h-full w-full object-cover'
                                                                />
                                                            </figure>
                                                            {genre.name}
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </>
                            ) : (
                                <div>Failed to load genres</div>
                            )}
                        </motion.div>
                    </Popover.Content>
                </AnimatePresence>
            </Popover.Portal>
        </Popover.Root>
    );
}
