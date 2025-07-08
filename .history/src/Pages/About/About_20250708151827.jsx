import React from 'react';
import AboutBanner from './AboutBanner/AboutBanner';
import WhoWeAre from './WhoWeAre/WhoWeAre';
import Progress from './Progress/Progress';

const About = () => {
    return (
        <div>
            <div>
                <AboutBanner></AboutBanner>


            </div>
            <WhoWeAre></WhoWeAre>
        </div>
    );
};

export default About;