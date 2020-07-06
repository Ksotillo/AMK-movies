import React, { useState, useEffect, createRef } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useWindowSize from '../../hooks/useWindowSize';
import { MoviesService } from '../../services/MoviesService';
import { ApiResponseArray } from '../../models/ApiResponse';
import { movieGenres } from "../../services/UtilsService";
import { Movie } from '../../models/Movie';
import GenreFilter from '../../components/Genre';


const moviesService = new MoviesService();

const Movies = () => {
    const [left, setLeft] = useState(0);
    const [ movies, setMovies ] = useState<Promise<ApiResponseArray<Movie>>[] | ApiResponseArray<Movie>[]> ([]);
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
        const { scrollLeft } = document.getElementsByClassName('react-tabs__tab-list')[0];
        const { left } = (event.target as HTMLHeadingElement).getBoundingClientRect() as DOMRectReadOnly;
        setLeft(left + scrollLeft)
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
    
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
      </Tabs>
    )
}

export default Movies;