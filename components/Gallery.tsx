'use client';
import Image from 'next/image';
import Carousel from '@/components/Carousel';
import { useState } from 'react';

type GalleryProps = {
    screenshots: { id: number; image: string }[];
};

export default function Gallery({ screenshots }: GalleryProps) {
    const [showCarousel, setShowCarousel] = useState(false);
    const [index, setIndex] = useState<number>(0);

    function handleOpenCarousel(index: number) {
        setIndex(index);
        setShowCarousel(true);
    }
    return (
        <>
            <div className=' grid w-full grid-cols-2 gap-4 pt-4'>
                {screenshots.slice(0, 3).map((screenshot, index) => (
                    <button
                        key={screenshot.id}
                        onClick={() => handleOpenCarousel(index)}
                        className=' aspect-video h-auto w-full overflow-hidden rounded-xl'
                    >
                        <Image
                            src={screenshot.image}
                            alt=''
                            width={200}
                            height={100}
                            priority
                            className=' h-full w-full object-cover'
                        />
                    </button>
                ))}
                {screenshots.length > 4 && (
                    <button
                        className='bg-brand-gray-dark flex aspect-video h-auto w-full items-center justify-center rounded-xl'
                        onClick={() => handleOpenCarousel(3)}
                    >
                        <Image
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
            {showCarousel && (
                <Carousel
                    images={screenshots}
                    open={showCarousel}
                    setShowCarousel={setShowCarousel}
                    index={index}
                    setIndex={setIndex}
                />
            )}
        </>
    );
}
