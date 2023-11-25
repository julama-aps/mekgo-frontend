import React from 'react';
import Header from "../components/Header/Header";
import Map from "../components/Map/Map"
import Footer from "../components/Footer/Footer";
import '../App.css';

function Home() {
    return (
        <div className="app-container">
            <Header />
            <div className='content'>
                <Map />
            </div>
            <Footer />
        </div>
    )
}

export default Home;