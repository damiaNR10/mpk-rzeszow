import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Burgermenu extends React.Component {

    render() {
        return (   
            // <div className="burgermenu">
            //     <nav className="navbar">
            //         <ul>
            //             <li>
            //                 <Link className="sub" to="/informations">Informacje</Link>
            //             </li>
            //             <li>
            //                 <Link className="sub" to="/tenders">Przetargi</Link>
            //                 <ul>
            //                     <li>
            //                         <Link to="/tenders/current">Przetargi aktualne</Link>
            //                     </li>
            //                     <li>
            //                         <Link to="/tenders/archival">Przetargi archiwalne</Link>
            //                     </li>
            //                 </ul>
            //             </li>
            //             <li>
            //                 <Link className="sub" to="/regulations">Regulaminy</Link>
            //             </li>
            //             <li>
            //                 <Link className="sub" to="/services">Usługi</Link>
            //             </li>
            //             <li>
            //                 <Link to="/contact">Kontakt</Link>
            //             </li>
            //         </ul>  
            //     </nav> 
            // </div>
            <div onClick={this.props.onClick} className="burgermenu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        );
    }
}

export default Burgermenu;