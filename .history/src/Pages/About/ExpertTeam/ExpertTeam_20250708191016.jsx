import React from 'react';

const ExpertTeam = () => {
    return (
        <div className='bg-[#011031] p-10 my-10 relative w-full h-[600px] bg-fixed bg-center'>
            <div>
                <p className='uppercase text-[#8052AD] font-thin md:mb-2'>Our expert team</p>
                <h2 className='md:text-5xl text-xl font-bold leading-[3] text-gray-100 '>
                    We have world expert team</h2>

            </div>

            <div className='flex md:flex-row flex-col gap-5 m-10'>


                <div className="relative card bg-base-100 image-full w-96 shadow-sm overflow-hidden">
                    <figure>
                        <img
                            src="https://i.ibb.co/XfQNH821/office-7745317-960-720.webp
                            "
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* Absolute content at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className="text-left">| Director, Ultracore Creative</p>
                    </div>
                </div>

                <div className="relative card bg-base-100 image-full w-96 shadow-sm overflow-hidden">
                    <figure>
                        <img
                            src="https://i.ibb.co/DB9pG1F/pngtree-man-avatar-wearing-gray-suit-png-image-6102786.png"
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* Absolute content at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className="text-left">| CEO, Ultracore Creative</p>
                    </div>
                </div>

                <div className="relative card bg-base-100 image-full w-96 shadow-sm overflow-hidden">
                    <figure>
                        <img
                            src="https://i.ibb.co/8D4xdXHM/profile-icon-male-avatar-portrait-casual-person-silhouette-face-flat-design-vector-47075235.webp"
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* Absolute content at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className="text-left">| COO, Ultracore Creative</p>
                    </div>
                </div>

                <div className="relative card bg-base-100 image-full w-96 shadow-sm overflow-hidden">
                    <figure>
                        <img
                            src="https://i.ibb.co/gMbDBBd1/Male-Avatar.png"
                            alt="avatar"
                            className="w-full h-full object-cover"
                        />
                    </figure>

                    {/* Absolute content at the bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                        <h2 className="card-title">Mike Holder</h2>
                        <p className="text-left">| Software Engineer, Ultracore Creative</p>
                    </div>
                </div>



            </div>

        </div>
    );
};

export default ExpertTeam;