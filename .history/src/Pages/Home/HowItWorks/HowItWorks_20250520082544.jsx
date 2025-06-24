import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const HowItWorks = () => {
    return (
        <div>
            <CustomHeader heading='How development'
                subHeading='through Alcaline works'></CustomHeader>

            <div>
                <div className='flex gap-10 justify-between'>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className='text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1</span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className='text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1</span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className='text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1</span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;