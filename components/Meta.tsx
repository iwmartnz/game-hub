import { Developer, Esrb, Genre, Platform, Tag } from '@/types';
import React from 'react';
import Heading from './Heading';
import { cn } from '@/utils/style';

type MetaDataProps = {
    game: {
        developers?: Developer[];
        tags?: Tag[];
        platforms?: Platform[];
        genres?: Genre[];
        esrb?: Esrb;
    };
};

export default function Metadata({ game }: MetaDataProps) {
    const developers = game?.developers?.map((developer) => {
        return developer.name;
    });
    const platforms = game?.platforms?.map((platform) => {
        return platform.platform.name;
    });

    const tags = game?.tags?.map((tag) => {
        return tag.name;
    });

    const genres = game?.genres?.map((genre) => {
        return genre.name;
    });

    return (
        <div className='flex flex-col gap-6 py-6'>
            {game.developers && (
                <div className=''>
                    <Heading variant='meta'>Developer</Heading>
                    <ul className=' flex flex-row flex-wrap'>
                        {developers?.map((developer) => (
                            <li
                                key={developer}
                                className=" whitespace-nowrap after:content-[',\00a0']"
                            >
                                {developer}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {game.tags && (
                <div>
                    <Heading variant='meta'>Tags</Heading>
                    <ul className=' flex flex-row flex-wrap'>
                        {tags?.map((tag) => (
                            <li
                                key={tag}
                                className=" whitespace-nowrap after:content-[',\00a0']"
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {game.platforms && (
                <div>
                    <Heading variant='meta'>Platforms</Heading>
                    <ul className=' flex flex-row flex-wrap'>
                        {platforms?.map((platform) => (
                            <li
                                key={platform}
                                className=" whitespace-nowrap after:content-[',\00a0']"
                            >
                                {platform}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {game.genres && (
                <div>
                    <Heading variant='meta'>Genre</Heading>
                    <ul className=' flex flex-row flex-wrap'>
                        {genres?.map((genre) => (
                            <li
                                key={genre}
                                className=" whitespace-nowrap after:content-[',\00a0']"
                            >
                                {genre}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {game.esrb && (
                <div>
                    <Heading variant='meta'>Age rating</Heading>
                    <div>{game?.esrb.name}</div>
                </div>
            )}
        </div>
    );
}
