import { render } from '@testing-library/react';
import React from 'react';

class Prize extends React.Component {

    render() {

        const {color, name, value} = this.props;

        return(
            <article className="prize">
                <h5 className="prize__name">{name}</h5>
                <span className={`prize__value prize__value--${color}`}>{value}</span>
                <span className="prize__span">zł / m<sup>3</sup></span>
            </article>
        );
    }
}

export default Prize;