import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NewsList from '../components/NewsList';

class Homepage extends React.Component {
    render() {
        return ( <>
            <header className="header">
                <h2 className="content__header">Ogłoszenia MPK</h2>
                <Link className="header__link" to="/posts">Zobacz wszystkie</Link>
            </header>
            <NewsList />
            </>
        );
    }
}

export default Homepage;