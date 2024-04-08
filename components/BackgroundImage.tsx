'use client';
import Image from 'next/image';
import { useGameImageContext } from '@/context/GameImageContext';

export default function BackgroundImage() {
    const { gameImage } = useGameImageContext();

    return (
        <>
            {gameImage && (
                <figure className=' absolute -z-10 h-[40rem] w-screen'>
                    <Image
                        src={gameImage}
                        className=' absolute top-0 h-[40rem] w-screen object-cover opacity-10'
                        alt=''
                        width={900}
                        height={640}
                    />
                    <div className='from-brand-black to-brand-black/0 absolute left-0 top-[20rem] h-[20rem] w-full bg-gradient-to-t' />
                </figure>
            )}
        </>
    );
}
