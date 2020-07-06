import axios from "axios";
import { ApiService } from "./ApiService";

export class MoviesService extends ApiService {

    
    getPopularMovies() {
        const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=es&page=1`
        return axios.get(url);
    }
    getPopularMoviesByGenre(genre: string) {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${this.apiKey}&language=es&page=1`
      return axios.get(url);
    }
    getTopRatedMovies() {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=es&page=1`
      return axios.get(url);
    }
    getTopRatedMoviesByGenre() {
      const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${this.apiKey}&language=es&page=1`
      return axios.get(url);
    }

    getMovieById(movieId: number) {
      const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${this.apiKey}&append_to_response=videos`
      return axios.get(url);
    }
    getMostVoted () {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=vote_average.asc&include_adult=true&include_video=false&page=1`
      return axios.get(url);
    }

}