import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import LineDivider from '../../Components/Divider/LineDivider';

const Hire = () => {
    return (
        <div>
            <HeaderBanner img="https://i.ibb.co/qLPfzPS0/saulo-mohana-w-Nz7-5-Ev-UWU-unsplash.jpg" title="Career"></HeaderBanner>
            <div className=" bg-white flex flex-col items-center justify-center px-6 py-16 text-center">

                <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 mt-5">Grow With Us</h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                    We’re hiring thinkers, builders, and creators who want to make a global impact.
                </p>

                <a
                    href="/careers"
                    className="disabled mt-8 inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition"
                >
                    View Open Roles
                </a>
            </div>
            <LineDivider></LineDivider>
        </div>
    );
};

export default Hire;