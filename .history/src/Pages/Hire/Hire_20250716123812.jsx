import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import LineDivider from '../../Components/Divider/LineDivider';
import CustomButton from '../../Components/CustomButton/CustomButton';

const Hire = () => {
    return (
        <div>
            <HeaderBanner img="https://i.ibb.co/Xxznpvhd/hunters-race-MYbh-N8-Kaa-Ec-unsplash.jpg" title="Career"></HeaderBanner>
            <div className=" bg-white flex flex-col space-y-5 items-center justify-center px-6 py-16 text-center">

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 mt-5">Grow With Us</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl ">
                    We’re hiring thinkers, builders, and creators who want to make a global impact.
                </p>

                <CustomButton btnText="View Jobs"></CustomButton>

            </div>
            <LineDivider></LineDivider>
        </div>
    );
};

export default Hire;