import React from 'react';
import approach1 from '../../../assets/images/approach1.png'

const Approach = () => {
    return (
        <div>
            <div className='bg-[#F7F7FA] w-full lg:p-20 ' >
                <h1 className=' text-[#1A202C] text-3xl font-light mb-5 leading-relaxed'>Our design and

                    <br />   <span className='font-bold'> development approach</span> </h1>

            </div>

            <div>
                <div className="card card-border w-96">
                    <div className="card-body flex">
                        <div>
                            <img src={approach1} alt="" />
                        </div>
                        <div>
                        <h2 className="card-title text-[#1A202C]">UX Driven Engineering</h2>
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