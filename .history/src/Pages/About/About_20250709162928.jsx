import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Progress from './Progress/Progress';
import ExpertTeam from './ExpertTeam/ExpertTeam';
import Statistics from './Statistics/Statistics';
import Technologies from './Technologies/Technologies';
import Testimonial from './Testimonial/Testimonial';
import LineDivider from '../../Components/Divider/LineDivider';
const About = () => {
    return (
    <div>ˇ
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