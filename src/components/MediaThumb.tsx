import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Movie } from '../models/Movie';


const MediaThumb = ({ movie, isSlide }: { movie: Movie, isSlide?: boolean }) => {
    return (
        <div className={`flex flex-column ${isSlide ? 'mt5 mb5 items-center' : 'mt1 mb1 items-star'} pl1 pr1 relative`}>
            <img className={`thumb-image ${isSlide ? '' : ''}`} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Ad astra" />
            <img className='thumb-image-shadow' src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="Ad astra" />
            {isSlide && <h2 className='mt4 text-center'>{movie.title}</h2>}
            {!isSlide && <h4 className='mt3 ml2 mb1'>{movie.title}</h4>}
            <h4 className={isSlide ? 'mt1' : 'mt0'} >
                <FontAwesomeIcon className='mr2' icon='star' color='#FCC419' />
                {movie.vote_average}
            </h4>
        </div>
    )
}

export default MediaThumb;