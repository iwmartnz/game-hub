import Link from 'next/link';
import Searchbar from '@/components/Searchbar';

export default function Header() {
    return (
        <header className=' flex w-full items-center gap-6 px-6 py-6'>
            <Link href='/' className=' text-2xl font-bold'>
                Game Hub
            </Link>
            <Searchbar />
        </header>
    );
}
