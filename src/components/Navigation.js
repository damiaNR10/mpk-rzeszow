import React from 'react';
import Navigator from './Navigator'
const { uuid } = require('uuidv4');

class Navigation extends React.Component {
    state = {
        navigator: [
            {
                key: uuid(),
                name: 'Rozkład jazdy',
                imgSrc: '/images/svg/icon-bus.svg',
                link: '',
                imgWidth: '70px',
            },
            {
                key: uuid(),
                name: 'Cennik biletów',
                imgSrc: '/images/svg/icon-ticket.svg',
                link: '',
                imgWidth: '34px',
            },
            {
                key: uuid(),
                name: 'Biletomaty',
                imgSrc: '/images/svg/icon-ticket-machine.svg',
                link: '',
                imgWidth: '26px',
            },
            {
                key: uuid(),
                name: 'Ogłoszenia ZTM',
                imgSrc: '/images/svg/icon-annoucments.svg',
                link: '',
                imgWidth: '32px',
            }
        ],
    }

    render() {
        return ( 
            <section className="navigation">
                <div className="container navigation__container">
                        {this.state.navigator.map((navigation) => <Navigator key={navigation.key} link={navigation.link} name={navigation.name} imgSrc={navigation.imgSrc} imgWidth={navigation.imgWidth}/>)}
                </div>
            </section>
        );
    }
}

export default Navigation;