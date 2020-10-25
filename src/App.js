import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//pages
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/AboutPage';

import Page from 'react-page-loading';

//components
import Navbar from './components/Navbar/Navbar';


function App() {

    // const [isLoading,
    //     setLoading] = useState(true);

    // function fakeRequest() {
    //     return new Promise(resolve => setTimeout(() => resolve(), 3000));
    // }

    // useEffect(() => {
    //     fakeRequest().then(() => {
    //         const el = document.querySelector(".loader-container");
    //         if (el) {
    //             el.remove();
    //             setLoading(!isLoading);
    //         }
    //     });
    // }, []);

    // if (isLoading) {
    //     return null;
    // }


    return (
        <Page loader={"bubble-spin"} color={"#A9A9A9"} size={20} >
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/about' component={AboutPage}/>
            </Switch>
        </Router>
        </Page>
    );
}

export default App;
