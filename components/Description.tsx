'use client';
import { cn } from '@/utils/style';
import parse from 'html-react-parser';
import { useState } from 'react';

type GameDescriptionProps = {
    rawDescription: string;
};

export default function Description({ rawDescription }: GameDescriptionProps) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const description: any = parse(rawDescription);
    const isLargeDescription = rawDescription.length > 1000;

    function toggleDescription() {
        setShowFullDescription((prevState) => !prevState);
    }
    return (
        <div
            className={cn(
                'relative h-72 w-full overflow-hidden text-brand-gray-light',
                showFullDescription && `h-auto w-full overflow-y-clip`
            )}
        >
            {description}
            {isLargeDescription && (
                <div
                    className={cn(
                        'absolute bottom-0 flex h-20 w-full items-end justify-center bg-gradient-to-t from-brand-black to-black/0',
                        showFullDescription && 'relative h-6 pt-8'
                    )}
                >
                    <button
                        className=' rounded-xl bg-brand-white px-2 py-1 text-sm text-brand-black'
                        onClick={toggleDescription}
                    >
                        {showFullDescription === false
                            ? `Read more`
                            : `Show less`}
                    </button>
                </div>
            )}
        </div>
    );
}
