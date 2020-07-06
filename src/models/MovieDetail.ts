import { Movie } from "./Movie";
import { Genre } from "./Genre";
import { Video } from "./Video";
import { Image } from "./Image";

export interface MovieDetail extends Movie {
    genres: Genre;
    videos: {
        results: Video[]
    },
    images: {
        backdrops: Image[];
        posters: Image[];
    }
}