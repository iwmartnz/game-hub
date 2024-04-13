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

type ModalProps = {
    open: boolean;
    onOpenChange: () => void;
    index: number;
    setIndex: React.Dispatch<SetStateAction<number>>;
    images: { id: number; image: string }[];
};

export default function Carousel({
    open,
    onOpenChange,
    index,
    setIndex,
    images,
}: ModalProps) {
    function decrement() {
        if (index >= images.length) return null;
        setIndex((prevState) => prevState - 1);
    }

    function increment() {
        if (index > images.length) return null;
        setIndex((prevState) => prevState + 1);
    }

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange} modal>
            <Dialog.Trigger>Open Modal</Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.Overlay className=' fixed inset-0 z-20 bg-brand-black/90 backdrop-blur-sm' />
                <Dialog.Content asChild>
                    <motion.div
                        initial={{ opacity: 0, width: '40%' }}
                        animate={{ opacity: 1, width: '100%' }}
                        transition={{ duration: 0.2 }}
                        className=' fixed left-[50%] top-[50%] z-30 flex max-h-[85vh] w-[90vw] max-w-[1000px] translate-x-[-50%] translate-y-[-50%] items-end justify-center rounded-[6px] p-8 focus:outline-none'
                    >
                        <figure className='aspect-video h-auto w-full overflow-hidden rounded-xl bg-brand-black shadow-xl'>
                            <Image
                                src={images[index].image}
                                alt=''
                                width={800}
                                height={700}
                                className='h-full w-full object-cover'
                            />
                        </figure>
                        <div className='absolute bottom-4 flex items-center gap-2'>
                            <button
                                onClick={decrement}
                                disabled={index === 0}
                                className='rounded-full  bg-white p-1 text-brand-black shadow-sm shadow-black/15 backdrop-blur-sm disabled:opacity-20'
                            >
                                <ChevronLeftIcon className='h-8 w-8' />
                            </button>
                            <button
                                onClick={increment}
                                disabled={index >= images.length - 1}
                                className='rounded-full  bg-white p-1 text-brand-black  shadow-sm shadow-black/20 backdrop-blur-sm disabled:opacity-20'
                            >
                                <ChevronRightIcon className='h-8 w-8' />
                            </button>
                        </div>
                        <button
                            onClick={onOpenChange}
                            className='absolute right-5 top-5 rounded-full bg-white p-1 text-brand-black shadow-sm shadow-black/20 duration-300 hover:scale-110'
                        >
                            <CloseIcon className='h-6 w-6' />
                        </button>
                    </motion.div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
