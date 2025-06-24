import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import way1Img from '../../../assets/images/way1.png'
import way2Img from '../../../assets/images/way2.jpg'

const WayOfBuilding = () => {
    return (
        <div className='py-20'>
            <CustomHeader heading='Way of building' subHeading='Great Software'></CustomHeader>

            <div>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-10">
                        <div className='relative'>
                        <div class="z-[-10] w-8 h-8 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute right-[-8%] bottom-[-5%]"></div>
                        <div class="z-[-10] w-8 h-8 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute left-[50%] bottom-[-4%]"></div>
                        <img
                            src={way1Img}
                            className="lg:max-w-lg max-w-sm rounded-lg shadow-2xl"
                        />
                        </div>
                      
                        <div className='text-left flex-1 p-5 '>
                            <h1 className="text-3xl font-bold text-[#1A202C]">Build the right team to scale</h1>
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
                    <div className="hero-content flex-col lg:flex-row gap-10">


                        <div className='relative'>
                        <div class="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] absolute left-[10%] bottom-[-8%] z-[-10]"></div>

                            <div class="z-[-10] w-8 h-8 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute right-[-2.5%] top-[-2%]"></div>
                            <img
                                src={way2Img}
                                className="lg:max-w-lg max-w-sm rounded-lg shadow-2xl "
                            />
                        </div>

                        <div className='text-left flex-1 p-5 '>
                            <h1 className="text-3xl font-bold text-[#1A202C]">Uniting ideas, creating impact.</h1>
                            <p className="py-6 text-[#2D3748]">
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