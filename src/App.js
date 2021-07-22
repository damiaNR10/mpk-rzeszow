import React from 'react';
import Homepage from './views/Homepage';
import Footer from './components/Footer';
import Topbar from './components/Topbar';
import Slider from './components/Slider';
import Navigation from './components/Navigation';
import Prizes from './components/PrizeList';
import Contact from './views/Contact';
import Aside from './components/Aside';

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
                    <Switch>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Homepage />
                        </Route>
                    </Switch>
                    </div>
                </div>
                <Footer />
            </Router>
        </div>
    );
}

export default App;