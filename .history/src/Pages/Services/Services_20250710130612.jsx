import React from 'react';

const Services = () => {
    return (
        <div className='h-[300px] items-center flex justify-center'>



            <div className='service-area'>
                {/* service--1 */}
                <div className=" service-card bg-[#fff] shadow-sm  rounded-lg">
                    <div className=''>
                        <img
                            className='h-[52px] w-[52px] border border-[#DE9EBA] rounded-lg p-2'
                            src={slide1aiml}
                            alt="AI"
                        />
                    </div>

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

                {/* service--2 */}
                <div className="service-card bg-[#fff]  shadow-sm">
                    <div className=''>
                        <img
                            className='max-h-16 max-w-16 border border-[#DE9EBA] rounded-lg p-2 object-contain'
                            src={slide2uiux}
                            alt="AI"
                        />
                    </div>

                    <div className="">
                        <h2 className="card-title font-semibold text-gray-700">
                            UI/UX & Digital Design
                        </h2>
                        <ol className='text-left text-[#718096] list-decimal list-inside  '>
                            <li>User-centric mobile & web design</li>
                            <li>Wireframing & prototyping (Figma, Adobe XD)</li>
                            <li>Brand identity & visual storytelling</li>
                            <li>Accessibility-first interfaces</li>
                        </ol>

                    </div>
                </div>
            </div>



        </div>
    );
};

export default Services;