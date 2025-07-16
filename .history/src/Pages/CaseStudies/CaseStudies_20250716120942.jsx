import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import { FaCheck } from 'react-icons/fa';
import LineDivider from '../../Components/Divider/LineDivider';

const CaseStudies = () => {
    const features = [
        {
            title: 'World-Class Engineering:',
            description: 'Our team comprises top talent with global experience and technical depth.'
        },
        {
            title: 'Proven Delivery:',
            description: 'We’ve shipped products that scale — from startups to enterprise.'
        },
        {
            title: 'Global Vision, Local Execution:',
            description: 'We bring the best of both worlds: a global mindset with local agility.'
        },
        {
            title: 'Innovation as a Service:',
            description: 'We don’t just build — we solve. We strategize, design, develop, and iterate.'
        },
        {
            title: 'People-Centric Culture:',
            description: 'We don’t just build — we solve. We strategize, design, develop, and iterate.'
        },
    ];

    return (
        <div>
            <CustomHeader subHeading="Why Ultracore?" heading="Case Studies" />
            
            <div className="md:w-[80%] w-full mx-auto py-10 space-y-5 bg-gray-100 shadow-lg md:px-10 px-5 rounded-lg mb-10">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-wrap items-start gap-2 text-gray-600 text-base">
                        <FaCheck className="text-purple-600 mt-1" />
                        <div>
                            <span className="font-bold">{feature.title}</span>{' '}
                            <span className="font-thin">{feature.description}</span>
                        </div>
                    </div>
                ))}
            </div>

            <LineDivider />
        </div>
    );
};

export default CaseStudies;
