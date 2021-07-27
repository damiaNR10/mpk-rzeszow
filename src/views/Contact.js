import React from 'react';

class Contact extends React.Component {

    render() {
        return ( 
            <>
                <h2 className="content__header">Kontakt</h2>
                <div className="contact">
                    <p className="content__p">Miejskie Przedsiębiorstwo Komunikacyjne - Rzeszów Spółka z o.o.{"\n"}ul. Lubelska 54{"\n"}35-233 Rzeszów</p>
                    <p className="content__p"><a href="tel:178660400">Centrala: <b>17 86-60-400</b></a>{"\n"}<a href="tel:178660405">Sekretariat: <b>17 86-60-405</b></a>{"\n"}<a href="178660419">Fax: <b>17 86-60-419</b></a>{"\n"}<a href="tel:178660323">Dyspozytor: <b>17 86-60-323</b></a></p>
                    <p className="content__p"><a href="mailto:firma@mpk.rzeszow.pl">adres e-mail: <b>firma@mpk.rzeszow.pl</b></a></p>
                    <p className="content__p">Podkarpacki Bank Spółdzielczy w Sanoku oddział w Rzeszowie{"\n"}30 8642 1126 2012 1113 8958 0001</p>
                    <h3 className="content__h3">Dział reklamy:</h3>
                    <p className="content__p">ul. Lubelska 54{"\n"}35-233 Rzeszów</p>
                    <p className="content__p">Pon – Pt. w godz. 7.00 – 14.00</p>
                    <p className="content__p"><a href="tel:178660511">tel. <b>17 86-60-511</b></a><a href="tel:667664838">{"\n"}kom. <b>667-664-838</b></a></p>
                    <p className="content__p"><a href="mailto:reklama@mpk.rzeszow.pl">e-mail: reklama@mpk.rzeszow.pl</a></p>
                    <h3 className="content__h3">Wydział przewozów:</h3>
                    <p className="content__p"><a href="tel:178660511">tel. <b>17 86-60-511</b></a></p>
                    <h3 className="content__h3">Wydział autobusów:</h3>
                    <p className="content__p"><a href="tel:178660421">tel. <b>17 86-60-421</b></a></p>
                    <h4 className="content__h4">Rachunek dla wpłat z tytułu opłaty za przejazd bez ważnego biletu:</h4>
                    <p className="content__p">BANK NOWY BFG S.A.{"\n"}Kod Swift: POLUPLPR{"\n"}IBAN: PL73 8642 1126 2012 1113 8958 0003</p>
                    <h4 className="content__h4">Windykacja za przejazd bez ważnego biletu do dnia 31 lipca 2012 r.</h4>
                    <p className="content__p">ul. Lubelska 54,{"\n"}35-233 Rzeszów{"\n"}<a href="tel:178660402">tel: <b>17 86-60-402</b></a></p>
                    <p className="content__p">poniedziałek - piątek 7.30 - 14.30</p>
                    <h3 className="content__h3">Inspektor Ochrony Danych</h3>
                    <p className="content__p"><a href="tel:178660427">tel.: 17 86-60-427</a>{"\n"}<a href="mailto:iod@mpk.rzeszow.pl">e-mail: iod@mpk.rzeszow.pl</a></p>
                    <h4 className="content__h4">UWAGA: Wezwania do zapłaty opłaty podwyższonej wystawione od 2012 r. obsługuje</h4>
                    <p className="content__p">Zarząd Transportu Miejskiego w Rzeszowie{"\n"}ul. Trembeckiego 3{"\n"}35-234 Rzeszów{"\n"}<a href="tel:178660359">tel: <b>17 86-60-359</b></a></p>
                </div>
            </>
        );
    }
}

export default Contact;