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
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div className='w-full'>
            <Helmet>
                <title>Home | Ultracore Creatives</title>
                <meta name="description" content="Welcome to our homepage" />
            </Helmet>

            <Banner></Banner>
            <div className='w-full  h-[20px] left-1/2 right-1/2 z-10 circle-divider'>
                <Divider className="hidden lg:block " positionPercent={30}></Divider>

            </div>
            <div className='w-full left-1/2 right-1/2 lg:-mt-[1.5%]'>

                <ServicesArea></ServicesArea>


            </div>

            <div className='w-full left-1/2 right-1/2 z-10 circle-divider'>
                <Divider className="hidden lg:block" positionPercent={10}></Divider>

            </div>

            <BoldIdeas></BoldIdeas>

            <div className='w-full left-1/2 right-1/2 lg:-mt-[1.5%]'>

                <Approach></Approach>
            </div>
            <div className='w-full left-1/2 right-1/2 lg:-mt-[1.5%]'>

                <WayOfBuilding></WayOfBuilding>

            </div>
            <div className='w-full left-1/2 right-1/2 lg:-mt-[1.5%]'>

                <LineDivider></LineDivider>
            </div>

            <TechStack>


            </TechStack>
            <div className='w-full left-1/2 right-1/2 lg:-mt-[1.5%]'>

                <LineDivider></LineDivider>
            </div>
            <HowItWorks></HowItWorks>

            <div className=' w-full left-1/2 right-1/2 lg:-mt-[1.5%]' >
                <Featured></Featured>
            </div>


            <FooterBanner></FooterBanner>



        </div>
    );
};

export default Home;