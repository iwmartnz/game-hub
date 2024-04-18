import Link from 'next/link';
import Searchbar from '@/components/Searchbar';
import { MenuIcon } from './Icon';
import Button from './Button';

export default function Header() {
    return (
        <header className=' flex h-fit w-full flex-col items-center gap-6 px-[3vw] py-6 sm:flex-row'>
            <Link
                href='/'
                className=' whitespace-nowrap text-2xl font-bold text-brand-accent'
            >
                Game Hub
            </Link>
            <div className='flex h-auto w-full gap-2'>
                <Searchbar />
                <Button className=' flex aspect-square h-12 w-auto items-center justify-center rounded-full lg:hidden'>
                    <MenuIcon size='24px' />
                </Button>
            </div>
        </header>
    );
}
