//import { render } from '@testing-library/react';
import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
// import mainLogo from '../images/svg/main-logo.svg';

function Topbar() {

    return (   
        // <Router>
        <header className="topbar">
            <div className="container">
                <h2>                
                    <Link to="/"></Link>
                    <picture><img src="/images/main-logo.svg" alt="" /></picture><span><b>Miejskie Przedsiębiorstwo<span>{<br/>}</span>Komunikacyjne</b> – Rzeszów Sp. z o.o.</span>
                </h2>
                <Link className="topbar__homepage" to="/"></Link>
                <nav className="navbar">
                    <ul>
                        {/* <li>
                            <a href="#" className="sub">Informacje</a>
                            <ul>
                                <li><a href="#" className="">Informacje A</a></li>
                                <li><a href="#" className="">Informacje N</a></li>
                                <li><a href="#" className="">Informacje V</a></li>
                                <li><a href="#" className="">Informacje X</a></li>
                            </ul>
                        </li>
                        <li><a href="#" className="sub">Przetargi</a></li>
                        <li><a href="#" className="sub">Regulaminy</a></li>
                        <li><a href="#" className="sub">Usługi</a></li>
                        <li><a href="#" className="">Kontakt</a></li> */}
                        <li>
                            <Link className="sub" to="/informations">Informacje</Link>
                        </li>
                        <li>
                            <Link className="sub" to="/tenders">Przetargi</Link>
                            <ul>
                                <li>
                                    <Link to="/tenders/current">Przetargi aktualne</Link>
                                </li>
                                <li>
                                    <Link to="/tenders/archival">Przetargi archiwalne</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link className="sub" to="/regulations">Regulaminy</Link>
                        </li>
                        <li>
                            <Link className="sub" to="/services">Usługi</Link>
                        </li>
                        <li>
                            <Link to="/contact">Kontakt</Link>
                        </li>
                    </ul>  
                </nav> 
                <a className="topbar__bip" href=""></a>
                <div className="burgermenu"></div>
            </div>
        </header>
        // </Router>
    );
}

// function Home() {
//     return <h2>Home</h2>;
// }
  
// function About() {
//     return <h2>About</h2>;
// }

// function Topics() {
//     return <h2>Topics</h2>;
// }

export default Topbar;