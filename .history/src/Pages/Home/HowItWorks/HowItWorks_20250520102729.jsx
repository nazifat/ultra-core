import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const HowItWorks = () => {
    return (
        <div>
            <CustomHeader heading='How development'
                subHeading='through Alcaline works'></CustomHeader>

            <div>
                <div className='flex gap-10 justify-start mb-20'>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className=' mr-3 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className=' mr-3 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className=' mr-3 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>

                </div>

                <div className="relative w-full my-8 h-10">
                    {/* Horizontal gradient line */}
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-px bg-gradient-to-r from-[#F76680] to-[#57007B]"></div>

                    {/* Top vertical lines */}
                    <div className="absolute -top-2 h-10 w-px bg-[#F76680]" style={{ left: '20%' }}></div>
                    <div className="absolute -top-3 h-10 w-px bg-[#F76680]" style={{ left: '50%' }}></div>
                    <div className="absolute -top-3 h-10 w-px bg-[#F76680]" style={{ left: '80%' }}></div>

                    {/* Bottom vertical lines */}
                    <div className="absolute -bottom-3 h-3 w-px bg-[#57007B]" style={{ left: '45%' }}></div>
                    <div className="absolute -bottom-3 h-3 w-px bg-[#57007B]" style={{ left: '60%' }}></div>
                    <div className="absolute -bottom-3 h-3 w-px bg-[#57007B]" style={{ left: '75%' }}></div>
                </div>



                <div className='flex gap-10 justify-start my-20'>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className=' mr-3 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className=' mr-3 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-10 text-left'>
                        <h1 className='text-xl font-bold text-[#1A202C] mb-2'> <span className=' mr-3 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowItWorks;