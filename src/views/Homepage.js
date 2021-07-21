import React from 'react';
import Slider from '../components/Slider';
import Prizes from '../components/Prizes';

class Homepage extends React.Component {
    render() {
        return ( 
            <>
                <Slider />
                <Prizes />
            </>
        );
    }
}

export default Homepage;