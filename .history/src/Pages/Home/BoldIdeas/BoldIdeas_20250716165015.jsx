import React from 'react';
import { NavLink } from 'react-router-dom';
import aboutImg from '../../../assets/images/Abou-us-Video.png'
const BoldIdeas = () => {
    return (
        <div className='lg:flex justify-center items-center text-left text-[#1A202C] gap-10 lg:px-20 py-5 px-3 lg:pb-40  '>
            <div className='lg:flex-1'>

                <div className="h-1 w-20 bg-gradient-to-r from-[#F76680] to-[#57007B] rounded-full  mb-2 mx-auto lg:mx-0"></div>

                <h1 className='lg:text-3xl text-xl lg:text-left text-center font-light mb-5 leading-relaxed'>Building bold ideas <span className='font-bold'>Together</span> </h1>
                <p className=' text-[#718096] text-justify mb-5 leading-relaxed'> Life at our startup is all about innovation, collaboration, and growth. We build cool stuff, move fast, support each other, and have fun doing it. Every voice matters, and every day brings a new chance to make an impact.

                </p>
                <NavLink className='text-[#57007B]  mt-10'>See more information --{'>'} </NavLink>

            </div>
            <div className='my-5'>
                <img src={aboutImg} alt="" />
            </div>


        </div>
    );
};

export default BoldIdeas;