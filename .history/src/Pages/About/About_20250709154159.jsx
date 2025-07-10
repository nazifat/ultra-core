import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Progress from './Progress/Progress';
import ExpertTeam from './ExpertTeam/ExpertTeam';
import Statistics from './Statistics/Statistics';
import Technologies from './Technologies/Technologies';
import Testimonial from './Testimonial/Testimonial';

const About = () => {
    return (
    <div>
        <AboutBanner></AboutBanner>
        <WhoWeAre></WhoWeAre>
        <Statistics></Statistics>
        <Technologies></Technologies>
        <ExpertTeam></ExpertTeam>
        <Testimonial></Testimonial>
    </div>
    );
};

export default About;