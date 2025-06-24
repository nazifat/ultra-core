import React from 'react';
import CustomHeader from '../../../Components/CustomHeader/CustomHeader';
import way1Img from '../../../assets/images/way1.png'
import way2Img from '../../../assets/images/way2.jpg'

const WayOfBuilding = () => {
    return (
        <div className='py-10'>
            <CustomHeader heading='Way of building' subHeading='Great Software'></CustomHeader>

            <div>
                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src={way1Img}
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className='text-left '>
                            <h1 className="text-5xl font-bold">Build the right team to scale</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WayOfBuilding;