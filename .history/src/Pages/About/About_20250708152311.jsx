import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Progress from './Progress/Progress';
import ExpertTeam from './ExpertTeam/ExpertTeam';

const About = () => {
    return (
    <div>
        <AboutBanner></AboutBanner>
        <WhoWeAre></WhoWeAre>
        <ExpertTeam></ExpertTeam>
    </div>
    );
};

export default About;