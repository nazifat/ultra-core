import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Progress from './Progress/Progress';
import ExpertTeam from './ExpertTeam/ExpertTeam';
import Statistics from './Statistics/Statistics';

const About = () => {
    return (
    <div>
        <AboutBanner></AboutBanner>
        <WhoWeAre></WhoWeAre>
        <Statistics></Statistics>
        <ExpertTeam></ExpertTeam>
    </div>
    );
};

export default About;