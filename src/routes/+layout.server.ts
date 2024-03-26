import type { LayoutServerLoad } from './$types';
import { RAWG_API_KEY } from '$env/static/private';

type ApiGenre = {
	id: number;
	name: string;
	slug: string;
	image_background: string;
};

export const load = (async () => {
	const getGenres = async () => {
		try {
			const res = await fetch(`https://api.rawg.io/api/genres?key=${RAWG_API_KEY}`);
			const ApiGenres = await res.json();

			return ApiGenres.results.map((genre: ApiGenre) => ({
				id: genre.id,
				name: genre.name,
				slug: genre.slug,
				image: genre.image_background
			}));
		} catch (error) {
			console.log('Failed to fetch game genres', error);
		}
	};
	return { genres: getGenres() };
}) satisfies LayoutServerLoad;
