import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import trophy from '../../../assets/images/trophy.png'

const HowItWorks = () => {
    return (
        <div>
            <CustomHeader heading='How development'
                subHeading='through Alcaline works'></CustomHeader>

            <div>
                <div className='flex gap-10 justify-start my-10 mr-[10%]'>
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
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[95%] h-px bg-gradient-to-r from-[#F76680] to-[#57007B]"></div>

                    {/* Image on the right */}
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                        <img src={trophy} alt="Trophy" className="h-8 w-auto" />
                    </div>

                    {/* Top vertical lines */}
                    <div className="absolute -top-5 h-10 w-px bg-[#F76680]" style={{ left: '15%' }}></div>
                    <div className="absolute -top-5 h-10 w-px bg-[#F76680]" style={{ left: '45%' }}></div>
                    <div className="absolute -top-5 h-10 w-px bg-[#F76680]" style={{ left: '75%' }}></div>

                    {/* Bottom vertical lines */}
                    <div className="absolute -bottom-5 h-10 w-px bg-[#F76680]" style={{ left: '25%' }}></div>
                    <div className="absolute -bottom-5 h-10 w-px bg-[#F76680]" style={{ left: '50%' }}></div>
                    <div className="absolute -bottom-5 h-10 w-px bg-[#F76680]" style={{ left: '70%' }}></div>
                </div>



                <div className='flex gap-10 justify-start my-10 ml-[10%]'>
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