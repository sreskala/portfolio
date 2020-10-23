import React, { useEffect } from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage';

//components
import Navbar from './components/Navbar/Navbar';

//lax
import { useLax, useLaxElement } from 'use-lax';

function App() {

    useLax();

    return (
        <Router>
            <Navbar/>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/about' component={AboutPage} />
            </Switch>
        </Router>
    );
}

export default App;
