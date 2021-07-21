import React from 'react';
import Homepage from '../views/Homepage';
import Footer from '../components/Footer';
import Topbar from '../components/Topbar';

function App() {
    return ( 
        <div className="App">
            <Topbar />
            {/* <Homepage /> */}
            <Footer />
        </div>
    );
}

export default App;