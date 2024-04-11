'use client';
import React, { SetStateAction } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import * as Dialog from '@radix-ui/react-dialog';
import {
    ChevronLeftIcon,
    ChevronRightIcon,
    CloseIcon,
} from '@/components/Icon';

type CarouselProps = {
    open: boolean;
    setShowCarousel: React.Dispatch<SetStateAction<boolean>>;
    images: { id: number; image: string }[];
    index: number;
    setIndex: React.Dispatch<SetStateAction<number>>;
};

export default function Carousel({
    open,
    images,
    index,
    setIndex,
    setShowCarousel,
}: CarouselProps) {
    function decrement() {
        if (index >= images.length) return null;
        setIndex((prevState) => prevState - 1);
    }

    function increment() {
        if (index > images.length) return null;
        setIndex((prevState) => prevState + 1);
    }

    return (
        <Dialog.Root open={open} onOpenChange={setShowCarousel} modal>
            <Dialog.Trigger>Open Modal</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className=' fixed inset-0 z-20 bg-brand-black/90 backdrop-blur-sm' />

                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, width: '40%' }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 0.2 }}
                        className=' fixed left-[50%] top-[50%] z-30 flex max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] items-end justify-center rounded-[6px] shadow-xl  focus:outline-none lg:w-[200vh] lg:max-w-[1000px]'
                    >
                        <figure className='aspect-video h-auto w-full overflow-hidden rounded-xl bg-brand-black'>
                            <Image
                                src={images[index].image}
                                alt=''
                                width={800}
                                height={700}
                                className='h-full w-full object-cover'
                            />
                        </figure>
                        <div className='absolute -bottom-4 flex items-center gap-2'>
                            <button
                                onClick={decrement}
                                disabled={index === 0}
                                className='rounded-full  bg-white p-1 text-brand-black shadow-md shadow-black/50 backdrop-blur-sm disabled:opacity-20'
                            >
                                <ChevronLeftIcon className='h-8 w-8' />
                            </button>
                            <button
                                onClick={increment}
                                disabled={index >= images.length - 1}
                                className='rounded-full  bg-white p-1 text-brand-black  shadow-md shadow-black/50 backdrop-blur-sm disabled:opacity-20'
                            >
                                <ChevronRightIcon className='h-8 w-8' />
                            </button>
                        </div>
                        <button
                            onClick={() => setShowCarousel(false)}
                            className='absolute -right-2 -top-2 rounded-full  bg-white p-1 text-brand-black shadow-md shadow-black/50'
                        >
                            <CloseIcon className='h-6 w-6' />
                        </button>
                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
