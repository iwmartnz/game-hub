'use client';
import Image from 'next/image';
import ImagesModal from '@/components/ImagesModal';
import { useState } from 'react';

type GalleryProps = {
    screenshots: { id: number; image: string }[];
};

export default function Gallery({ screenshots }: GalleryProps) {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);

    function handleOpenModal(index: number) {
        setIndex(index);
        setShowModal(true);
    }
    function handleCloseModal() {
        setShowModal(false);
    }

    return (
        <>
            <div className=' grid w-full grid-cols-2 gap-4 pt-4'>
                {screenshots.slice(0, 3).map((screenshot, index) => (
                    <button
                        key={screenshot.id}
                        onClick={() => handleOpenModal(index)}
                        className=' aspect-video h-auto w-full overflow-hidden rounded-xl'
                    >
                        <img
                            src={screenshot.image}
                            alt=''
                            width={200}
                            height={100}
                            className=' h-full w-full object-cover'
                        />
                    </button>
                ))}
                {screenshots.length > 4 && (
                    <button
                        className='flex aspect-video h-auto w-full items-center justify-center rounded-xl bg-brand-gray-dark'
                        onClick={() => handleOpenModal(3)}
                    >
                        <img
                            src={screenshots[3].image}
                            alt=''
                            height={200}
                            width={300}
                            className=' h-full w-full object-cover opacity-10'
                        />
                        <span className='absolute'>View all...</span>
                    </button>
                )}
            </div>
            {showModal && (
                <ImagesModal
                    open={showModal}
                    onOpenChange={handleCloseModal}
                    index={index}
                    setIndex={setIndex}
                    images={screenshots}
                />
            )}
        </>
    );
}
