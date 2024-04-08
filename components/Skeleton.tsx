type SkeletonProps = {
    variant: 'heading' | 'description' | 'grid' | 'gallery' | 'card' | 'list';
};

export default function Skeleton({ variant }: SkeletonProps) {
    return (
        <>
            {variant == 'heading' && (
                <div className='bg-brand-gray-dark h-16 w-96 rounded-xl' />
            )}
            {variant == 'description' && (
                <div
                    role='status'
                    className='max-w-lg animate-pulse space-y-2.5'
                >
                    <div className='flex w-full items-center'>
                        <div className='bg-brand-gray-dark h-8 w-32 rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-24 rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-full rounded-full'></div>
                    </div>
                    <div className='flex w-full max-w-[480px] items-center'>
                        <div className='bg-brand-gray-dark h-8 w-full rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-full rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-24 rounded-full'></div>
                    </div>
                    <div className='flex w-full max-w-[400px] items-center'>
                        <div className='bg-brand-gray-neutral/60 h-8 w-full rounded-full'></div>
                        <div className='bg-brand-gray-dark ms-2 h-8 w-80 rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-full rounded-full'></div>
                    </div>
                    <div className='flex w-full max-w-[480px] items-center'>
                        <div className='bg-brand-gray-dark ms-2 h-8 w-full rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-full rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-24 rounded-full'></div>
                    </div>
                    <div className='flex w-full max-w-[440px] items-center'>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-32 rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-24 rounded-full'></div>
                        <div className='bg-brand-gray-dark ms-2 h-8 w-full rounded-full'></div>
                    </div>
                    <div className='flex w-full max-w-[360px] items-center'>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-full rounded-full'></div>
                        <div className='bg-brand-gray-dark ms-2 h-8 w-80 rounded-full'></div>
                        <div className='bg-brand-gray-neutral/60 ms-2 h-8 w-full rounded-full'></div>
                    </div>
                </div>
            )}
            {variant == 'grid' && (
                <div className='grid max-h-full w-full grid-cols-[repeat(auto-fit,_minmax(230px,_1fr))] justify-items-center gap-6 overflow-y-scroll py-6'>
                    <div className='bg-brand-gray-dark relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/90 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/80 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />

                    <div className='bg-brand-gray-dark/70 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/60 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/50 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />

                    <div className='bg-brand-gray-dark/40 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/30 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/20 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                    <div className='bg-brand-gray-dark/10 relative flex aspect-[8/9] h-auto w-full animate-pulse flex-col overflow-hidden rounded-2xl' />
                </div>
            )}
            {variant == 'gallery' && (
                <div className='grid gap-4'>
                    <div className='bg-brand-gray-dark aspect-video h-auto w-full animate-pulse rounded-[1vw]' />
                    <div className='grid w-full grid-cols-2 gap-4'>
                        <div className='bg-brand-gray-dark/60 relative flex aspect-video h-auto min-w-full animate-pulse flex-col overflow-hidden rounded-[1vw]' />
                        <div className='bg-brand-gray-dark/60 relative flex aspect-video h-auto min-w-full animate-pulse flex-col overflow-hidden rounded-[1vw]' />
                        <div className='bg-brand-gray-dark/30 relative flex aspect-video h-auto min-w-full animate-pulse flex-col overflow-hidden rounded-[1vw]' />
                        <div className='bg-brand-gray-dark/30 relative flex aspect-video h-auto min-w-full animate-pulse flex-col overflow-hidden rounded-[1vw]' />
                    </div>
                </div>
            )}
            {variant == 'card' && (
                <div className=' bg-brand-gray-neutral flex aspect-[8/9] h-auto w-full overflow-hidden rounded-3xl' />
            )}
            {variant == 'list' && (
                <div className='flex flex-col gap-2'>
                    <div className='bg-brand-gray-light/35 h-8 w-full animate-pulse rounded-lg' />
                    <div className='bg-brand-gray-light/30 h-8 w-full animate-pulse rounded-lg' />
                    <div className='bg-brand-gray-light/25 h-8 w-full animate-pulse rounded-lg' />
                    <div className='bg-brand-gray-light/20 h-8 w-full animate-pulse rounded-lg' />
                    <div className='bg-brand-gray-light/15 h-8 w-full animate-pulse rounded-lg' />
                    <div className='bg-brand-gray-light/10 h-8 w-full animate-pulse rounded-lg' />
                </div>
            )}
        </>
    );
}
