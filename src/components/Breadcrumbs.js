import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Breadcrumbs extends React.Component {



    render() {
        return (   
            <div className="breadcrumbs">
                <ul className="breadcrumbs__ul">
                    <li><a href="">Przetargi</a></li>
                    <li>Przetargi aktualne</li>
                </ul>
            </div>
        );
    }
}

export default Breadcrumbs;