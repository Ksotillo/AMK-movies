// React
import React, { useState, useEffect, createRef } from 'react'
// Third Parties
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Slider from "react-slick";
// Services
import { MoviesService } from '../../services/MoviesService';
import { movieGenres } from "../../services/UtilsService";
// Components
import GenreFilter from '../../components/Genre';
// Interface
import { ApiResponseArray } from '../../models/ApiResponse';
import { Movie } from '../../models/Movie';
// Hooks
import useWindowSize from '../../hooks/useWindowSize';
import MediaThumb from '../../components/MediaThumb';
import { Row, Col, Grid } from 'react-flexbox-grid';


const moviesService = new MoviesService();




const Movies = () => {
    const [left, setLeft] = useState(0);
    const [animation, setAnimation] = useState('fadeIn');
    const [ movies, setMovies ] = useState<ApiResponseArray<Movie>[]> ([]);
    const [ genres, setGenres ] = useState<number[]>([]);
    const [ width ] = useWindowSize();
    const firstTab = createRef<HTMLHeadingElement>();

    const onGenreAdded = (genre: number) => setGenres(genres => [...genres, genre])
    const onGenreRemoved = (genre: number) => setGenres(genres => genres.filter(g => g !== genre))

    // On mount
    useEffect(() => {
        const { left } = firstTab.current?.getBoundingClientRect() as DOMRectReadOnly;
        setLeft(left);
        Promise.all(
            [moviesService.getPopularMovies(), moviesService.getPopularMovies(), moviesService.getTopRatedMovies()]
            ).then(([newest, popular, topRated]) => {
                console.log([newest, popular, topRated])
                setMovies([newest, popular, topRated])
            })
    }, [])

    const onTabChange = (index: number, lastIndex:number, event: Event) => {
        setAnimation('fadeIn')
        const { scrollLeft } = document.getElementsByClassName('react-tabs__tab-list')[0];
        const { left } = (event.target as HTMLHeadingElement).getBoundingClientRect() as DOMRectReadOnly;
        setLeft(left + scrollLeft)
        setTimeout(() => {
            setAnimation('')
        }, 1000);
    }
    return (
        <Tabs onSelect={onTabChange}>
            <TabList>
                <Tab>
                    <h1 className='mb1' ref={firstTab}>Lo más nuevo</h1>
                </Tab>
                <Tab>
                    <h1 className='mb1'>Popular</h1>
                </Tab>
                <Tab>
                    <h1 className='mb1'>Las mejores</h1>
                </Tab>
            {width < 764 && <div className='tab-indicator ph2' style={{ left }}></div>}
            </TabList>
            {width > 764 && <div className='tab-indicator ph2' style={{ left }}></div>}
            <div className='flex genre-container'>
                {movieGenres.map((genre, index: number) => 
                    <GenreFilter genre={genre} key={index} onGenreAdded={onGenreAdded} onGenreRemoved={onGenreRemoved} />
                )}
            </div>
            {movies.length > 0 && movies.map((array, i) => 
                <TabPanel className={`animated ${animation}`}  key={i}>
                    <Slider 
                        className='overflow-hidden'
                        dots={false}
                        infinite
                        centerMode
                        // autoplay
                    >
                        {movies.length > 0 && array.results.slice(0, 7).map((movie: Movie, index: number) =>
                            <MediaThumb key={index} movie={movie} isSlide/>
                        )}
                    </Slider>
                    <Row className='pl3 pr3'>
                        {movies.length > 0 && array.results.slice(7).map((movie: Movie, index: number) =>
                            <Col xs={6}  key={index}>
                                <MediaThumb key={index} movie={movie}/>
                            </Col>
                        )}
    
                    </Row>
            
                </TabPanel>
            )}
      </Tabs>
    )
}

export default Movies;