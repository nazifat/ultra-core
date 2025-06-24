import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const HowItWorks = () => {
    return (
        <div>
            <CustomHeader heading='How development'
                subHeading='through Alcaline works'></CustomHeader>

            <div>
                <div className='flex gap-10 justify-start'>
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

                <div className=" my-10relative w-full my-8 flex justify-center items-center">
                    {/* Top vertical lines */}
                    <div className="absolute top-[-12px] flex gap-10">
                        <div className="w-px h-10 bg-[#F76680]"></div>
                        <div className="w-px h-10 bg-[#F76680]"></div>
                        <div className="w-px h-10 bg-[#F76680]"></div>
                    </div>

                    {/* Horizontal gradient line */}
                    <div className="  h-px w-full bg-gradient-to-r from-[#F76680] to-[#57007B]"></div>

                    {/* Bottom vertical lines */}
                    <div className="absolute bottom-[-12px] flex gap-10">
                        <div className="w-px h-10 bg-[#57007B]"></div>
                        <div className="w-px h-10 bg-[#57007B]"></div>
                        <div className="w-px h-10 bg-[#57007B]"></div>
                    </div>
                </div>


                <div className='flex gap-10 justify-start'>
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