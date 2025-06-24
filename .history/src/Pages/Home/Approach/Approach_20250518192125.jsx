import React from 'react';
import approach1 from '../../../assets/images/approach1.png'
import approach2 from '../../../assets/images/approach2.png'
import approach3 from '../../../assets/images/approach3.png'
import approach4 from '../../../assets/images/approach4.png'
import approach5 from '../../../assets/images/approach5.png'
import approach6 from '../../../assets/images/approach6.png'

const Approach = () => {
    return (
        <div className=' bg-[#F7F7FA] lg:p-20 '>
            <div className='' >
                <h1 className=' text-[#1A202C] text-3xl font-light mb-5 leading-relaxed'>Our design and

                    <br />   <span className='font-bold'> development approach</span> </h1>

            </div>

            <div className='lg:grid lg:grid-cols-2 lg:gap-5 '>

                <div className=" bg-[#FAFAFA] border border-[#E7DAED] p-10 rounded-lg  ">
                    <div className=" flex gap-2 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-base-100 '>
                            <img src={approach1} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">UX Driven Engineering</h2>
                            <p className='text-[#4A5568]'>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.

                            </p>

                        </div>


                    </div>



                </div>


                {/* card------------2 */}
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] p-10 rounded-lg  ">
                    <div className=" flex gap-2 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-base-100 '>
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
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] p-10 rounded-lg  ">
                    <div className=" flex gap-2 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-base-100 '>
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
                <div className=" bg-[#FAFAFA] border border-[#E7DAED] p-10 rounded-lg  ">
                    <div className=" flex gap-2 items-start">
                        <div className='flex-shrink-0  p-2 border rounded-lg bg-base-100 '>
                            <img src={approach3} alt="" />
                        </div>
                        <div className='flex-1 text-left space-y-3'>
                            <h2 className="card-title text-[#1A202C]">Security & Intellectual Property (IP)
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