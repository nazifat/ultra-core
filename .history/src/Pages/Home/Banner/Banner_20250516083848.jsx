import React from 'react';
import bannerImage from '../../../assets/images/Hero-Wrapper__image.png'

const Banner = () => {
    return (
        <div>
            <div className="hero text-gray-700 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={bannerImage}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Great Product is built by great teams</h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;