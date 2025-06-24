import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Banner from './Banner/Banner';
import ServicesArea from './ServicesArea/ServicesArea';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <div className='w-screen'>
                <Divider positionPercent={30}></Divider>

            </div>
            <div className='w-screen'>
            <ServicesArea></ServicesArea>


            </div>
        </div>
    );
};

export default Home;