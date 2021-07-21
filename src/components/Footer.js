import React from 'react';

function getYear() {
    return new Date().getFullYear();
}

function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <p className="footer__p">Miejskie Przedsiębiorstwo Komunikacyjne – Rzeszów Sp. z o.o. &copy; {getYear()}</p>
                <p className="footer__p">Realizacja: <a href="https://zdzislowicz.pl/" target="_blank">Zdzislowicz.pl</a></p>
            </div>
        </footer>
    )
}

export default Footer;