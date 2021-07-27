import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Menu extends React.Component {

    render() {

        const {isBurgerOpen, onMenuClose} = this.props;

        return (   
            <div className={isBurgerOpen == true ? `menu menu--active` : 'menu'}>
                <button onClick = {onMenuClose} className="menu__btn">
                    <span></span>
                    <span></span>
                </button>
                <nav className="menu__nav">
                    <ul>
                        <li>
                            <Link onClick = {onMenuClose} className="sub" to="/informations">Informacje</Link>
                        </li>
                        <li>
                            <Link onClick = {onMenuClose} className="sub" to="/tenders">Przetargi</Link>
                            <ul>
                                <li>
                                    <Link onClick = {onMenuClose} to="/tenders/current">Przetargi aktualne</Link>
                                </li>
                                <li>
                                    <Link onClick = {onMenuClose} to="/tenders/archival">Przetargi archiwalne</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link onClick = {onMenuClose} className="sub" to="/regulations">Regulaminy</Link>
                        </li>
                        <li>
                            <Link onClick = {onMenuClose} className="sub" to="/services">Usługi</Link>
                        </li>
                        <li>
                            <Link onClick = {onMenuClose} to="/contact">Kontakt</Link>
                        </li>
                    </ul>  
                </nav> 
            </div>
        );
    }
}

export default Menu;