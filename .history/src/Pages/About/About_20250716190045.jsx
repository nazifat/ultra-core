import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Progress from './Progress/Progress';
import ExpertTeam from './ExpertTeam/ExpertTeam';
import Statistics from './Statistics/Statistics';
import Technologies from './Technologies/Technologies';
import Testimonial from './Testimonial/Testimonial';
import LineDivider from '../../Components/Divider/LineDivider';
import { Helmet } from 'react-helmet-async';
const About = () => {
    return (
    <div>ˇ
         <Helmet>
                <title>About | Ultracore Creatives</title>
                <meta name="description" content="Welcome to our homepage" />
            </Helmet>
        <AboutBanner></AboutBanner>
        <WhoWeAre></WhoWeAre>
        <Statistics></Statistics>
        <Technologies></Technologies>
        <ExpertTeam></ExpertTeam>
        <Testimonial></Testimonial>
        <LineDivider></LineDivider>
    </div>
    );
};

export default About;