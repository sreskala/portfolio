import React, {useState, useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//pages
import HomePage from './pages/Homepage/HomePage';
import AboutPage from './pages/Aboutpage/AboutPage';
import PortfolioPage from './pages/Portfoliopage/PortfolioPage';

import Page from 'react-page-loading';

//components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';



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
                <Route exact path ='/portfolio' component={PortfolioPage} />
            </Switch>
            <Footer />
        </Router>
        </Page>
    );
}

export default App;
