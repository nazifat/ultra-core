import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import way1Img from '../../../assets/images/way1.png'
import way2Img from '../../../assets/images/way2.jpg'

const WayOfBuilding = () => {
    return (
        <div className='lg:py-20 pt-10'>
            <div className='relative'>
                <CustomHeader heading='Way of building' subHeading='Great Software' className=''></CustomHeader>
                <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] absolute top-[-10%] left-[30%]"></div>
            </div>

            <div className='lg:mt-20'>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                        <div className='relative'>
                            <div class="z-[-10] w-10 h-10 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute right-[-8%] bottom-[-5%]"></div>
                            <div class="z-[-10] w-8 h-8 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute left-[45%] bottom-[-3%]"></div>
                            <div class="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] absolute left-[-5%] top-[-6%] z-[-10]"></div>

                            <img
                                src={way1Img}
                                className="lg:max-w-xl max-w-sm rounded-lg shadow-2xl"
                            />
                        </div>

                        <div className='text-left '>
                            <h1 className="lg:text-3xl text-xl lg:text-left text-center font-medium text-[#1A202C]">Build the right team to scale</h1>
                            <p className="py-6 text-[#616263] lg:text-lg text-sm leading-loose text-justify">
                                We believe in the power of collaboration to drive innovation. At our startup, every team member is empowered to contribute ideas, challenge the status quo, and grow together. We build strong relationships through open communication, shared goals, and a focus on mutual support. Whether its through brainstorming sessions, team activities, or simply working side by side, we know that a united team creates smarter solutions and delivers greater impact.
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" ">
                    <div className="flex-col lg:flex-row gap-10">


                        <div className='relative'>
                            <div class="w-20 h-20 rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] absolute left-[10%] bottom-[-8%] z-[-10]"></div>

                            <div class="z-[-10] w-8 h-8 rounded-full bg-gradient-to-r from-[#F76680] to-[#57007B] absolute right-[-2.5%] top-[-2%]"></div>
                            <img
                                src={way2Img}
                                className="lg:max-w-xl max-w-sm rounded-lg shadow-2xl "
                            />
                        </div>

                        <div className='text-left flex-1 lg:p-5 '>
                            <h1 className="lg:text-3xl text-xl lg:text-left text-center font-medium text-[#1A202C]">Uniting ideas, creating impact.</h1>
                            <p className="lg:py-6 text-[#616263] lg:text-lg text-sm leading-loose text-justify">
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