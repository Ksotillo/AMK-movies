import axios from "axios";
import { ApiService } from "./ApiService";
import { Movie } from "../models/Movie";
import { MovieDetail } from "../models/MovieDetail";

export class MoviesService extends ApiService {

    
    getPopularMovies(): Promise<Movie> {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=es&page=1`
        return axios.get(url);
    }
    getPopularMoviesByGenre(genreId: string): Promise<Movie> {
      const url = `https://api.themoviedb.org/3/movie?api_key=${this.apiKey}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
      return axios.get(url);
    }
    getTopRatedMovies(): Promise<Movie> {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=es&page=1`
      return axios.get(url);
    }
    getTopRatedMoviesByGenre(genreId: string): Promise<Movie> {
      const url = `https://api.themoviedb.org/3/movie?api_key=${this.apiKey}&language=es&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`
      return axios.get(url);
    }

    getMovieById(movieId: number): Promise<MovieDetail> {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&append_to_response=videos,images`
      return axios.get(url);
    }
    getMostVoted () {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1`
      return axios.get(url);
    }

}