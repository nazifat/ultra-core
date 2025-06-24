import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Banner from './Banner/Banner';
import ServicesArea from './ServicesArea/ServicesArea';

const Home = () => {
    return (
        <div className='max-w-xxl'>
            <Banner></Banner>
            <Divider positionPercent={30}></Divider>
            <ServicesArea></ServicesArea>
        </div>
    );
};

export default Home;