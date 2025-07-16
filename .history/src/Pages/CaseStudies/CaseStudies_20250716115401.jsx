import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';

const CaseStudies = () => {
    return (
        <div>
            <CustomHeader subHeading="Why Ultracore?" heading="Case Studies"></CustomHeader>

                            <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                                <FaCheck className="text-purple-600 " />
                                <span className="font-bold">World-Class Engineering:</span> Our team comprises top talent with global experience and technical depth.
                            </span>
                            <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                                <FaCheck className="text-purple-600 " />
                                <span className="font-bold">Integrity:</span>Delivering what we promise.
                            </span>
                            <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                                <FaCheck className="text-purple-600 " />
                                <span className="font-bold">  Collaboration: </span> Working across cultures and time zones.
                            </span>
                            <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                                <FaCheck className="text-purple-600 " />
                                <span className="font-bold"> Excellence: </span> Going the extra mile to ensure quality.
                            </span>


            •	World-Class Engineering
Our team comprises top talent with global experience and technical depth.
•	Proven Delivery
We’ve shipped products that scale — from startups to enterprise.
•	Global Vision, Local Execution
We bring the best of both worlds: a global mindset with local agility.
•	Innovation as a Service
We don’t just build — we solve. We strategize, design, develop, and iterate.
•	People-Centric Culture
Happy teams build better software. We invest deeply in people and relationships.

        </div>
    );
};

export default CaseStudies;