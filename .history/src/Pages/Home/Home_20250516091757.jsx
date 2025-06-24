import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Divider positionPercent={30}></Divider>
        </div>
    );
};

export default Home;