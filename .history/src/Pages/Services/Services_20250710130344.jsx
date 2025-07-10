import React from 'react';

const Services = () => {
    return (
        <div className='h-[300px] items-center flex justify-center'>
            <p className='text-3xl text-red-800'>
                <div className='service-area'>
                    <div className="">
                        <h2 className="card-title font-semibold text-gray-700">
                            AI & Machine Learning
                        </h2>
                        <ol className='text-left text-[#718096] list-decimal list-inside  '>
                            <li>Natural Language Processing (NLP)</li>
                            <li>Computer Vision & OCR</li>
                            <li>Predictive Analytics & Forecasting</li>
                            <li>AI Model Integration & Deployment</li>
                        </ol>

                    </div>
                </div>

            </p>
        </div>
    );
};

export default Services;