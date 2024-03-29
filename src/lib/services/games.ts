import { RAWG_API_KEY } from '$env/static/private';

type ApiGame = {
	id: number;
	name: string;
	slug: string;
	background_image: string;
	platforms: string[];
	metacritic: string;
};

export const getGamesbyTag = async (tag: string) => {
	try {
		const res = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&tags=${tag}`);
		const data = await res.json();

		return data?.results?.map((game: ApiGame) => ({
			id: game.id,
			name: game.name,
			slug: game.slug,
			image: game.background_image,
			platforms: game.platforms,
			metacritic: game.metacritic
		}));
	} catch (error) {
		console.log(error);
	}
};

export const getGameDetails = async (id: string) => {
	const res = await fetch(`https://api.rawg.io/api/games/${id}?key=${RAWG_API_KEY}`);
	const gameData = await res.json();
	return {
		id: gameData.id,
		name: gameData.name,
		slug: gameData.slug,
		image: gameData.background_image,
		description: gameData.description,
		platforms: gameData.platforms,
		stores: gameData.stores,
		tags: gameData.tags,
		released: gameData.released,
		playtime: gameData.playtime,
		metacritic: gameData.metacritic,
		genres: gameData.genres,
		developers: gameData.developers,
		esrb: gameData.esrb_rating,
		rating: gameData.rating,
		website: gameData.website
	};
};

export const getGameScreenshots = async (id: string) => {
	const res = await fetch(`https://api.rawg.io/api/games/${id}/screenshots?key=${RAWG_API_KEY}`);
	const data = await res.json();

	return data.results;
};

export const getGamesByTitle = async (title: string) => {
	try {
		const res = await fetch(
			`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&search=${title}`
		);
		const data = await res.json();

		return data?.results?.map((game: ApiGame) => ({
			id: game.id,
			name: game.name,
			slug: game.slug,
			image: game.background_image,
			platforms: game.platforms,
			metacritic: game.metacritic
		}));
	} catch (error) {
		console.log(error);
	}
};

export const getGamesByGenre = async (slug: string) => {
	try {
		const res = await fetch(`https://api.rawg.io/api/games?key=${RAWG_API_KEY}&genres=${slug}`);
		const data = await res.json();

		return data?.results?.map((game: ApiGame) => ({
			id: game.id,
			name: game.name,
			slug: game.slug,
			image: game.background_image,
			platforms: game.platforms,
			metacritic: game.metacritic
		}));
	} catch (error) {
		console.log(error);
	}
};
