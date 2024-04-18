import Link from 'next/link';
import Searchbar from '@/components/Searchbar';
import Menu from './Menu';
import { getGenres } from '@/services/genres';
import { Genre } from '@/types';

export default async function Header() {
    const genres: Genre[] = await getGenres();
    return (
        <header className=' flex h-fit w-full flex-col items-center gap-6 px-[3vw] py-6 sm:flex-row'>
            <Link
                href='/'
                className=' whitespace-nowrap text-2xl font-bold text-brand-accent'
            >
                Game Hub
            </Link>
            <div className='flex h-auto w-full gap-2'>
                <Menu genres={genres} />
                <Searchbar />
            </div>
        </header>
    );
}
