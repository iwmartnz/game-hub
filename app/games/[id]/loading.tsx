import Skeleton from '@/components/Skeleton';

export default function Loading() {
    return (
        <main className='flex w-full flex-col gap-4 overflow-hidden pt-6 lg:flex-row'>
            <div className='flex flex-col gap-6 lg:w-7/12'>
                <Skeleton variant='heading' />
                <Skeleton variant='description' />
            </div>
            <div className=' lg:w-5/12'>
                <Skeleton variant='gallery' />
            </div>
        </main>
    );
}
