import React from 'react';
import TechnologyStack from '../../Components/TechnologyStack/TechnologyStack';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import IndustriesWeServe from '../../Components/IndustriesWeServe/IndustriesWeServe';

const HowItWorks = () => {
    return (
        <div>
             <Helmet>
                <title>How It Works | Ultracore Creatives</title>
                <meta name="description" content="Welcome to our homepage" />
            </Helmet>
            <HeaderBanner 
            title="Technology Stack"
            img="https://i.ibb.co/YBRfB4dz/huy-phan-u-Wb-Dl-Ej-Gf-E4-unsplash.jpg"></HeaderBanner>
            <TechnologyStack></TechnologyStack>
            <IndustriesWeServe></IndustriesWeServe>

        </div>
    );
};

export default HowItWorks;