export type Game = {
    id: number;
    name: string;
    slug: string;
    image: string;
    description: string;
    platforms: Platform[];
    metacritic: string;
    genres?: Genre[];
    developers?: Developer[];
    tags: Tag[];
    released?: string;
    playtime?: string;
    esrb?: Esrb;
    rating?: number;
    website?: string;
};

export type Genre = {
    id: number;
    name: string;
    slug: string;
    image?: string;
    description?: string;
    image_background?: string;
};

export type Icon = {
    size?: string;
    color?: string;
    className?: string;
};

export type Platform = {
    platform: { id: number; name: string | null | StaticImport; slug: string };
};

export type Store = {
    store: { id: number; name: string | null; slug: string };
};

export type Developer = {
    id: number;
    name: string;
    slug: string;
};

export type Tag = { id: number; name: string; slug: string };

export type Esrb = { id: number; name: string; slug: string };
