import React, { FunctionComponent } from 'react'
import { Route } from '../models/Route';

// Components
import Movies from "../views/Movies/Movies";




// const Movies: SFC = () => {
//     return function (){
//         return <></>
//     };
// };

const routes: Route[] = [
    { path: '/', exact: true, name: 'Home', isInSidebar: false },
    { path: '/search/:query', name: 'Search', component: Movies, isInSidebar: false },
    { path: '/search/:query/:id', name: 'Search', component: Movies, isInSidebar: false },
    { path: '/movies', name: 'Películas', component: Movies, isInSidebar: true, icon: 'film' },
    { path: '/series', name: 'Series', component: Movies, isInSidebar: true, icon: 'tv' },
    // { path: '/new', name: 'Popular', component: Movies },
    // { path: '/popular', name: 'Popular', component: Movies },
    // { path: '/top-rated', name: 'Las mejores', component: Movies },
    { path: '/request', name: '¡Pidenos algo!', component: Movies, isInSidebar: true, icon: 'edit' },
    { path: '/faq', name: 'Preguntas frecuentes', component: Movies, isInSidebar: true, icon: 'question-circle' },
  ];

  export default routes