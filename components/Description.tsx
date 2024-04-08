'use client';
import parse from 'html-react-parser';
import { useState } from 'react';

type GameDescriptionProps = {
    rawDescription: string;
};

export default function Description({ rawDescription }: GameDescriptionProps) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const fullDescription: any = parse(rawDescription);

    return <div className=' text-brand-gray-light'>{fullDescription}</div>;
}
