import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Banner from './Banner/Banner';
import ServicesArea from './ServicesArea/ServicesArea';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <div className='w-screen md:relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] md:z-10 sm:p-20 sm:my-10  '>
                <Divider positionPercent={30}></Divider>

            </div>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] -mt-[1.5%]'>

                <ServicesArea></ServicesArea>

            </div>
        </div>
    );
};

export default Home;