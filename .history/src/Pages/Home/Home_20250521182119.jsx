import React from 'react';
import Divider from '../../Components/Divider/Divider';
import Approach from './Approach/Approach';
import Banner from './Banner/Banner';
import BoldIdeas from '././BoldIdeas/BoldIdeas';
import ServicesArea from './ServicesArea/ServicesArea';
import WayOfBuilding from './WayOfBuilding/WayOfBuilding';
import TechStack from './TechStack/TechStack';
import LineDivider from '../../Components/Divider/LineDivider';
import FooterBanner from './FooterBanner/FooterBanner';
import HowItWorks from './HowItWorks/HowItWorks';
import Featured from './Featured/Featured';

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

            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] z-10'>
                <Divider className="sm:hidden lg:block" positionPercent={10}></Divider>

            </div>

            <BoldIdeas></BoldIdeas>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <Approach></Approach>
            </div>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <WayOfBuilding></WayOfBuilding>

            </div>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <LineDivider></LineDivider>
            </div>

            <TechStack>


            </TechStack>
            <div className='w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] lg:-mt-[1.5%]'>

                <LineDivider></LineDivider>
            </div>
            <HowItWorks></HowItWorks>

            <div className=' w-screen'>
                <Featured></Featured>
            </div>


            <FooterBanner></FooterBanner>



        </div>
    );
};

export default Home;