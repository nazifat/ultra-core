import React from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import Featured from '../Home/Featured/Featured'

const Blog = () => {
    return (
        <div>
            <HeaderBanner img="https://i.ibb.co/sp1dtCTK/andrew-neel-cckf4-Ts-HAuw-unsplash.jpg" title="Blog"></HeaderBanner>
            <Featured></Featured>
        </div>
    );
};

export default Blog;