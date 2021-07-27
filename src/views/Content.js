import React from 'react';
import File from '../components/File';
import Breadcrumbs from '../components/Breadcrumbs';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const { uuid } = require('uuidv4');

class Content extends React.Component {

    state = {
        files: [
            {
                key: uuid(),
                author: 'Jan Nowak',
                date: '24.06.2021',
                link: '',
                name: 'Elewacja SIZW',
                size: '350kB',
                type: 'PDF',
            },
            {
                key: uuid(),
                author: 'Jan Nowak',
                date: '24.06.2021',
                link: '',
                name: 'Elewacja SIZW - 2',
                size: '35kB',
                type: 'PNG',
            },
        ],
    }; 

    render() {
        return (   
            <>
                <Breadcrumbs />
                <h2 className="content__header">MPK - Rzeszów Sp. z o.o. ogłasza przetarg nieograniczony na wykonanie remontu elewacji budynku dyspozytorni na zajezdni autobusowej przy ul. Lubelskiej 54.</h2>
                <div className="content__txt">
                    <p className="content__p">Miejskie Przedsiębiorstwo Komunikacyjne – Rzeszów Spółka z o.o., ul. Lubelska 54, zaprasza do udziału w	przetargu ofertowym na wykonanie remontu elewacji z tynku mineralnego budynku dyspozytorni na zajezdni autobusowej przy ul. Lubelskiej 54.</p>
                    <p className="content__p">Numer sprawy REBD/TM/1/2021</p>
                    <h3 className="content__h3">Zakres zamówienia obejmuje:</h3>
                    <ul className="content__ul">
                        <li>usunięcie kurzu i brudu, miejscowe naprawy ocieplenia, remont powłoki elewacji wykonanej na warstwie docieplenia tynkiem mineralnym, częściowo złuszczonym i zabrudzonym, wzmocnienie powłoki tynkarskiej gruntem penetrującym.</li>
                        <li>Zmycie elewacji wodą pod ciśnieniem z dodatkiem środka myjącego, malowanie ścian farbą silikonową odporną na zabrudzenia (samoczyszczącej) z zabezpieczeniem przed porastaniem glonami i grzybami z uwzględnieniem wskazanej przez Zamawiającego kolorystyki tynków.</li>
                        <li>Malowanie obróbek dachowych wykonanych z blachy	powlekanej (małe ogniska korozji) – z uwzględnieniem wskazanej przez Zamawiającego kolorystyki</li>
                        <li>powierzchnia malowania około 320 m2</li>
                        <li>wymiana obróbki blacharskiej okien (parapety)</li>
                    </ul>
                    <h5 className="content__h5">Przy wyborze oferty Zamawiający kierował się będzie następującymi kryteriami:</h5>
                    <ul className="content__ul">
                        <li>najniższa cena	- 80%</li>
                        <li>gwarancja - 20%</li>
                    </ul>
                    <h5 className="content__h5">Osobami uprawnionymi przez Zamawiającego do porozumiewania się z Oferentami są:</h5>
                    <ul className="content__ul">
                        <li>w zakresie zagadnień proceduralnych: <a href="tel:178660425">Leszek Czajkowski tel. (17) 866 04 25</a></li>
                        <li>w zakresie zagadnień merytorycznych: <a href="178660403">Mariusz Hałdys tel. (17) 866 04 03</a></li>
                    </ul>
                    <h3 className="content__h3">Termin składania ofert:</h3>
                    <p className="content__p">29.07.2021 r. godzina 13.00, miejsce: Miejskie Przedsiębiorstwo Komunikacyjne – Rzeszów Spółka z o.o., ul. Lubelska 54, 35-233 Rzeszów, Sekretariat. Otwarcie ofert nastąpi w siedzibie Zamawiającego: MPK w Rzeszowie Sp. z o. o., ul. Lubelska 54,35-233 Rzeszów sala konferencyjna, w dniu 29.07.2021 r. o godzinie 13.15 i jest jawne.</p>
                    <h4 className="content__h4">Zamawiający zastrzega sobie prawo do unieważnienia przetargu.</h4>
                    <p className="content__p">Zamawiający WYMAGA, aby Wykonawca pozyskał dla siebie, na swoja odpowiedzialność i ryzyko, wszelkie informacje, które mogą być niezbędne w przygotowaniu oferty oraz przy zawieraniu umowy, gdyż wyklucza się możliwość roszczeń Wykonawcy z tytułu błędnego skalkulowania ceny lub pominięcia elementów niezbędnych do wykonania umowy. Koszt takiej wizyty ponosi Wykonawca. W tym celu przedstawiciel Wykonawcy zobowiązany jest dokonać wizji lokalnej u Zamawiającego wspólnie z przedstawicielem Zamawiającego</p>
                    {this.state.files.map((file) => <File key={file.key} author={file.author} date={file.date} link={file.link} name={file.name} size={file.size} type={file.type} />)}
                </div>
            </>
        );
    }
}

export default Content;