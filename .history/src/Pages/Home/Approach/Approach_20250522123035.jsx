import React from 'react';
import approach1 from '../../../assets/images/approach1.png'
import approach2 from '../../../assets/images/approach2.png'
import approach3 from '../../../assets/images/approach3.png'
import approach4 from '../../../assets/images/approach4.png'
import approach5 from '../../../assets/images/approach5.png'
import approach6 from '../../../assets/images/approach6.png'
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';

const Approach = () => {
    return (
        <div className=' bg-[#F7F7FA] lg:p-20 '>
            <div className='relative' >
            <div class="w-10 h-10 rounded-full bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] absolute left-[-5%] top-[-6%] z-[-10]"></div>

                <CustomHeader heading='Our design and' subHeading='development approach'>

                </CustomHeader>
         

            </div>

            <div className='mx-4 space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5 approach'>

                <div className=" bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg  ">
                    <div className=" flex gap-5 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-gradient-to-r from-[#29272E] to-[#27272E]'>
                            <img src={approach1} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">UX Driven Engineering</h2>
                            <p className=''>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.

                            </p>

                        </div>


                    </div>



                </div>


                {/* card------------2 */}
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg  ">
                    <div className=" flex gap-5 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-gradient-to-r from-[#68DBF2] to-[#509CF5] '>
                            <img src={approach2} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">Developing Shared Understanding</h2>
                            <p className='text-[#4A5568]'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.


                            </p>

                        </div>


                    </div>



                </div>
                {/* card------------3 */}
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg  ">
                    <div className=" flex gap-5 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-gradient-to-r from-[#FF92AE] to-[#FF3D9A] '>
                            <img src={approach3} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">Proven Experience and Expertise</h2>
                            <p className='text-[#4A5568]'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.


                            </p>

                        </div>


                    </div>



                </div>
                {/* card------------4 */}
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg  ">
                    <div className=" flex gap-5 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-gradient-to-r from-[#67E9F1] to-[#24E795] '>
                            <img src={approach4} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">Security & Intellectual Property (IP)
                            </h2>
                            <p className='text-[#4A5568]'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.


                            </p>

                        </div>


                    </div>



                </div>
                {/* card------------5 */}
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg  ">
                    <div className=" flex gap-5 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-gradient-to-r from-[#FFEF5E] to-[#F7936F] '>
                            <img src={approach5} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">Code Reviews

                            </h2>
                            <p className='text-[#4A5568]'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.


                            </p>

                        </div>


                    </div>



                </div>
                {/* card------------6 */}
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] px-[5%] py-[10%] rounded-lg  ">
                    <div className=" flex gap-5 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-gradient-to-r from-[#F76680] to-[#57007B] '>
                            <img src={approach6} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">Quality Assurance & Testing
                            </h2>
                            <p className='text-[#4A5568]'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.


                            </p>

                        </div>


                    </div>



                </div>

            </div>



        </div>
    );
};

export default Approach;