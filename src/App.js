import React from 'react';
import Aside from './components/Aside';
import Contact from './views/Contact';
import Cookies from './components/Cookies';
import Footer from './components/Footer';
import Homepage from './views/Homepage';
import Navigation from './components/Navigation';
import Prizes from './components/PrizeList';
import Posts from './views/Posts';
import Slider from './components/Slider';
import Topbar from './components/Topbar';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function App() {
    return ( 
        <div className="App">
            <Router>
                <Topbar />
                <Prizes />
                <Slider />
                <Navigation />
                <div className="main">
                    <div className="container main__container">
                    <Aside />
                    <div className="content">
                        <Switch>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/informations">

                            </Route>
                            <Route path="/tenders">

                            </Route>
                            <Route path="/regulations">

                            </Route>
                            <Route path="/services">

                            </Route>
                            <Route path="/posts">
                                <Posts />
                            </Route>
                            <Route path="/">
                                <Homepage />
                            </Route>
                        </Switch>
                    </div>
                    </div>
                </div>
                <Cookies />
                <Footer />
            </Router>
        </div>
    );
}

export default App;