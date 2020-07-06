export interface Movie {
    id: number,
    title: string,
    original_title?: string;
    original_language?: string;
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    realease_date?: string;
    genre_ids?: number[];
    backgrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
}