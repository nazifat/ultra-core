import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import way1Img from '../../../assets/images/way1.png'
import way2Img from '../../../assets/images/way2.jpg'

const WayOfBuilding = () => {
    return (
        <div className='py-10'>
            <CustomHeader heading='Way of building' subHeading='Great Software'></CustomHeader>

            <div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <img
                            src={way1Img}
                            className="max-w-lg rounded-lg shadow-2xl"
                        />
                        <div className='text-left flex-1 p-5 '>
                            <h1 className="text-4xl font-bold text-[#1A202C]">Build the right team to scale</h1>
                            <p className="py-6 text-[#2D3748]">
                                We believe in the power of collaboration to drive innovation. At our startup, every team member is empowered to contribute ideas, challenge the status quo, and grow together. We build strong relationships through open communication, shared goals, and a focus on mutual support. Whether its through brainstorming sessions, team activities, or simply working side by side, we know that a united team creates smarter solutions and delivers greater impact.
                                <br />
                                <br />
                                <span className='font-bold my-4 py-5'> Uniting ideas, creating impact.</span>
                                <br />
                                <br />
                                A team that collaborates, innovates, and builds together to turn bold ideas into meaningful, lasting change.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <img
                            src={way1Img}
                            className="max-w-lg rounded-lg shadow-2xl"
                        />
                        <div className='text-left flex-1 p-5 '>
                            <h1 className="text-4xl font-bold text-[#1A202C]">Build the right team to scale</h1>
                            <p className="py-6 text-[#2D3748]">
                                We believe in the power of collaboration to drive innovation. At our startup, every team member is empowered to contribute ideas, challenge the status quo, and grow together. We build strong relationships through open communication, shared goals, and a focus on mutual support. Whether its through brainstorming sessions, team activities, or simply working side by side, we know that a united team creates smarter solutions and delivers greater impact.
                                <br />
                                <br />
                                <span className='font-bold my-4 py-5'> Uniting ideas, creating impact.</span>
                                <br />
                                <br />
                                A team that collaborates, innovates, and builds together to turn bold ideas into meaningful, lasting change.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WayOfBuilding;