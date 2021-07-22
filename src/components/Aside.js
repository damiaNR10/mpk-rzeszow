import React from 'react';
import Block from './Block';
const { uuid } = require('uuidv4');

class Aside extends React.Component {

    state = {
        elements: [
            {
                key: uuid(),
                header: 'Wyszukiwarka połączeń',
                content: [
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/jak-dojechac.svg',
                        link: '',
                        imgWidth: '170px',
                    },
                ]
            },
            {
                key: uuid(),
                header: 'Autobusy na linii - online',
                content: [
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/my-bus-online.svg',
                        link: '',
                        imgWidth: '108px',
                    },
                ]
            },
            {
                key: uuid(),
                header: 'Bilet elektroniczny',
                content: [
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/sky-cash.svg',
                        link: '',
                        imgWidth: '143px',
                    },
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/zbiletem.svg',
                        link: '',
                        imgWidth: '166px',
                    },
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/mobilet.svg',
                        link: '',
                        imgWidth: '134px',
                    },
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/gopay.svg',
                        link: '',
                        imgWidth: '104px',
                    },
                    {
                        key: uuid(),
                        imgSrc: '/images/logos/mpay.svg',
                        link: '',
                        imgWidth: '84px',
                    },
                ]
            },
        ]
    };

    render() {
        return ( 
            <aside className="aside">
                {this.state.elements.map((block) => <Block key={block.key} header={block.header} content={block.content} />)}
            </aside>
        );
    }
}

export default Aside;