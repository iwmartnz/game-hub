import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';

import Sidebar from '@/components/Sidebar';
import BackgroundImage from '@/components/BackgroundImage';
import { GameImageProvider } from '@/context/GameImageContext';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Game Hub',
    description: 'Find your next favorite game',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body
                className={` ${urbanist.className} bg-brand-black text-brand-white `}
            >
                <GameImageProvider>
                    <BackgroundImage />
                    <div className='flex gap-6 px-6'>
                        <Sidebar />
                        {children}
                    </div>
                </GameImageProvider>
            </body>
        </html>
    );
}
