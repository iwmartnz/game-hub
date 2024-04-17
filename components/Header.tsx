import Link from 'next/link';
import Searchbar from '@/components/Searchbar';

export default function Header() {
    return (
        <header className=' flex h-fit w-full flex-col items-center gap-6 px-[3vw] py-6 sm:flex-row'>
            <Link href='/' className=' text-2xl font-bold text-brand-accent'>
                Game Hub
            </Link>
            <Searchbar />
        </header>
    );
}
