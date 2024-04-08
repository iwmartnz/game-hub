import { Suspense } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Heading from './Heading';
import Skeleton from './Skeleton';

import { getGenres } from '@/services/genres';
import type { Genre } from '@/types';

export default async function Sidebar() {
    const genres: Genre[] = await getGenres();

    return (
        <aside className='hidden min-h-screen min-w-60 flex-col lg:flex'>
            <Link href='/games'>
                <Heading type='subheading' className='pb-2 pt-12'>
                    All Games
                </Heading>
            </Link>
            <Heading type='subheading' className='pb-2 pt-4'>
                Genres
            </Heading>
            <Suspense fallback={<Skeleton variant='list' />}>
                <ul className=' flex flex-col gap-2'>
                    {genres.map((genre) => (
                        <li key={genre.id}>
                            {genre.image && (
                                <Link
                                    href={`/genres/${genre.slug}`}
                                    className=' flex items-center gap-2 font-medium'
                                >
                                    <figure className=' aspect-square h-8 w-8 overflow-hidden rounded-lg'>
                                        <Image
                                            src={genre.image}
                                            alt={genre.name}
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
            </Suspense>
        </aside>
    );
}
