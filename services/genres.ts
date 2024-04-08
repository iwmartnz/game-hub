import type { Genre } from '@/types';

const API_KEY = process.env.RAWG_API_KEY;

type ApiGenre = {
    id: number;
    name: string;
    slug: string;
    image_background: string;
};

export const getGenres = async () => {
    try {
        const res = await fetch(
            `https://api.rawg.io/api/genres?key=${API_KEY}`
        );
        const ApiGenres = await res.json();

        return ApiGenres.results.map((genre: ApiGenre) => ({
            id: genre.id,
            name: genre.name,
            slug: genre.slug,
            image: genre.image_background,
        }));
    } catch (error) {
        console.log('Failed to fetch game genres', error);
    }
};

export const getGenreDetails = async (id: string) => {
    try {
        const res = await fetch(
            `https://api.rawg.io/api/genres/${id}?key=${API_KEY}`
        );
        const ApiGenre = await res.json();

        const genre: Genre = {
            id: ApiGenre.id,
            name: ApiGenre.name,
            slug: ApiGenre.slug,
            image: ApiGenre.image_background,
            description: ApiGenre.description,
        };

        return genre;
    } catch (error) {
        console.log('Failed to fetch game genres', error);
    }
};
