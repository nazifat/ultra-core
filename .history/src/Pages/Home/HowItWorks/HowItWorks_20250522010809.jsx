import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import trophy from '../../../assets/images/trophy.png'

const HowItWorks = () => {
    return (
        <div className='py-10'>
            <CustomHeader heading='How development'
                subHeading='through Alcaline works'></CustomHeader>

            <div>
                <div className='flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:gap-20 my-10   lg:mr-[10%]'>
                    <div className='border rounded-lg border-[#E7DAED] p-5 text-left'>
                        <h1 className='text-lg font-bold text-[#1A202C] mb-2'> <span className=' mr-1 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#1 </span> Assemble the right team</h1>
                        <p className='text-[#718096] text-[14px]'>We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-5  text-left'>
                        <h1 className='text-lg font-bold text-[#1A202C] mb-2'> <span className=' mr-1 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#3 </span> Tech architecture</h1>
                        <p className='text-[#718096] text-[14px]'>We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-5 text-left'>
                        <h1 className='text-lg font-bold  text-[#1A202C] mb-2'> <span className=' mr-1 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#5 </span> Code reviews</h1>
                        <p className='text-[#718096] text-[14px]'>Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells</p>
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
                    <div className="absolute -top-5 h-10 w-px bg-[#F76680]" style={{ left: '12%' }}></div>
                    <div className="absolute -top-5 h-10 w-px bg-[#F76680]" style={{ left: '45%' }}></div>
                    <div className="absolute -top-5 h-10 w-px bg-[#F76680]" style={{ left: '75%' }}></div>

                    {/* Bottom vertical lines */}
                    <div className="absolute -bottom-5 h-10 w-px bg-[#F76680]" style={{ left: '25%' }}></div>
                    <div className="absolute -bottom-5 h-10 w-px bg-[#F76680]" style={{ left: '55%' }}></div>
                    <div className="absolute -bottom-5 h-10 w-px bg-[#F76680]" style={{ left: '85%' }}></div>
                </div>



                <div className='flex flex-col lg:flex-row space-y-5 gap-20 lg:space-y-0 my-10 lg:ml-[5%]'>
                    <div className='border rounded-lg border-[#E7DAED] p-5   text-left'>
                        <h1 className='text-lg font-bold text-[#1A202C] mb-2'> <span className=' mr-1 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#2 </span> Sprint planning</h1>
                        <p className='text-[#718096] text-[14px]'>Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-5   text-left'>
                        <h1 className='text-lg font-bold text-[#1A202C] mb-2'> <span className=' mr-1 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#4 </span> Standups & weekly demos</h1>
                        <p className='text-[#718096] text-[14px]'>Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.</p>
                    </div>
                    <div className='border rounded-lg border-[#E7DAED] p-5   text-left'>
                        <h1 className='text-lg font-bold text-[#1A202C] mb-2'> <span className=' mr-1 text-xl font-bold bg-gradient-to-r from-[#F76680] to-[#57007B] bg-clip-text text-transparent'>#6 </span> Iterative delivery</h1>
                        <p className='text-[#718096] text-[14px]'>We divide the implementation process into several checkpoints rather than a single deadline.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowItWorks;