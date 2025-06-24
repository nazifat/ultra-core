import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Banner from './Banner/Banner';
import ServicesArea from './ServicesArea/ServicesArea';

const Home = () => {
    return (
        <div className='w-full'>
            <Banner></Banner>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-10'>
                <Divider className="sm:hidden lg:block" positionPercent={30}></Divider>

            </div>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <ServicesArea></ServicesArea>

            </div>
        </div>
    );
};

export default Home;