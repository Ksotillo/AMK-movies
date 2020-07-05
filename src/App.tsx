import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faVideo, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';

import Layout from "./container/Layout";

library.add(faVideo, faSearch, faBars)


// const loading = ;

function App() {
  return (
    <BrowserRouter>
        <React.Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path='/' name='Inicio' component={Layout} />
            </Switch>
        </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
