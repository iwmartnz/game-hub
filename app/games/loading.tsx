import Skeleton from '@/components/Skeleton';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <main className='w-full gap-4'>
            <div className='flex flex-col gap-6'>
                <div className='h-16 w-96 rounded-md bg-brand-gray-dark' />
                <div className='h-28 w-full rounded-md bg-brand-gray-dark'></div>
            </div>

            <Skeleton variant='grid' />
        </main>
    );
}
