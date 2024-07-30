'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import { useGameImageContext } from '@/context/GameImageContext';

type GameImageProps = {
    image: string;
};

export default function GameImage({ image }: GameImageProps) {
    const { setGameImage } = useGameImageContext();

    useEffect(() => {
        setGameImage(image);

        return () => {
            setGameImage('');
        };
    }, [image]);

    return (
        <figure className='aspect-video h-auto w-full overflow-hidden rounded-2xl'>
            <img
                src={image}
                alt=''
                width='400'
                height='300'
                className=' h-full w-full object-cover'
            />
        </figure>
    );
}
