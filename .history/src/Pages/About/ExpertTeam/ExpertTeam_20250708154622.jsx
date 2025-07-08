import React from 'react';

const ExpertTeam = () => {
    return (
        <div className='bg-[#011031] p-10'>
            <div>
                <p className='uppercase text-[#8052AD] font-thin md:mb-2'>Our expert team</p>
                <h2 className='md:text-5xl text-xl font-bold leading-[3] text-gray-100 '>
                    We have world expert team</h2>

            </div>

            <div className='flex md:flex-row flex-col gap-5 m-10'>

                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/gMbDBBd1/Male-Avatar.png"
                            alt="avatar" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className='text-left'>Director, Ultracore Creative</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/gMbDBBd1/Male-Avatar.png"
                            alt="avatar" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className='text-left'>Director, Ultracore Creative</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/gMbDBBd1/Male-Avatar.png"
                            alt="avatar" />
                    </figure>
                    <div className="card-body absoule bottom-[12px] ">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className='text-left'>Director, Ultracore Creative</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/gMbDBBd1/Male-Avatar.png"
                            alt="avatar" />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className='text-left'>Director, Ultracore Creative</p>
                        {/* <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div> */}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ExpertTeam;