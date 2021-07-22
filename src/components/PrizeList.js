import React from 'react';
import Prize from './Prize';
const { uuid } = require('uuidv4');

class PrizeList extends React.Component {

    state = {
        prizes: [
            {
                key: uuid(),
                name: 'CNG',
                value: '3.76',
                color: 'blue'
            },
            {
                key: uuid(),
                name: 'Pb95',
                value: '5.44',
                color: 'green'
            },
            {
                key: uuid(),
                name: 'ON',
                value: '5.41',
                color: 'gray'
            }
        ],
    }

    render() {
        return ( 
            <section className="prize-list">
                <div className="container prize-list__container">
                    <h2 className="prize-list__header">Ceny paliw</h2>
                    <div className="prize-list__grid">
                        {this.state.prizes.map((prize) => <Prize key={prize.key} value={prize.value} name={prize.name} color={prize.color}/>)}
                    </div>
                </div>
            </section>
        );
    }
}

export default PrizeList;