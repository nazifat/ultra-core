import React from 'react';

const Approach = () => {
    return (
        <div>
            <div className='bg-[#F7F7FA] w-full lg:p-20 ' >
                <h1 className=' text-[#1A202C] text-3xl font-light mb-5 leading-relaxed'>Our design and

                    <br />   <span className='font-bold'> development approach</span> </h1>

            </div>

            <div>
                <div className="card card-border  w-96">
                    <div className="card-body">
                        <h2 className="card-title">Card Title</h2>
                        <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Approach;