import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

//components
import Navbar from './components/Navbar/Navbar';

function App() {
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
