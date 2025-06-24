import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Approach from './Approach/Approach';
import Banner from './Banner/Banner';
import BoldIdeas from '././BoldIdeas/BoldIdeas';
import ServicesArea from './ServicesArea/ServicesArea';
import WayOfBuilding from './WayOfBuilding/WayOfBuilding';
import TechStack from './TechStack/TechStack';

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

            <BoldIdeas></BoldIdeas>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <Approach></Approach>
            </div>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <WayOfBuilding></WayOfBuilding>
            </div>

            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300 -translate-y-1/2"></div>
            <div className="flex w-full flex-col">
                <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
                <div className="divider">OR</div>
                <div className="card bg-base-300 rounded-box grid h-20 place-items-center">content</div>
            </div>



            <TechStack></TechStack>
        </div>
    );
};

export default Home;