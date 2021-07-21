import React from 'react';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import Topbar from '../components/Topbar';

class Homepage extends React.Component {
    render() {
        return ( 
            <>
                <Topbar />
                <Slider />
                <Footer />
            </>
        );
    }
}

export default Homepage;