import React from 'react';

const ExpertTeam = () => {
    return (
        <div>
            <div className='bg-[#011031] p-10'>
                <p className='uppercase text-[#8052AD] font-thin md:mb-2'>Our expert team</p>
                <h2 className='md:text-5xl text-xl font-bold leading-[3] text-gray-100 '>
                    We have world expert team</h2>

            </div>

            <div>
                <div className="card bg-base-100 image-full w-96 shadow-sm">
                    <figure>
                        <img
                            src="https://i.ibb.co/gMbDBBd1/Male-Avatar.png"
                            alt="Shoes" />
                    </figure>
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

export default ExpertTeam;