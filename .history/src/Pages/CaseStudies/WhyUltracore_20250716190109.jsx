import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import { FaCheck } from 'react-icons/fa';
import LineDivider from '../../Components/Divider/LineDivider';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>Case Studies | Ultracore Creatives</title>
                <meta name="description" content="Welcome to our homepage" />
            </Helmet>
            <HeaderBanner
                title="Case Studies"
                img="https://i.ibb.co/7t8H7gRx/ux-indonesia-8mik-J83-Lm-SQ-unsplash.jpg"></HeaderBanner>
            <CustomHeader heading="Why Ultracore?" />

            <div className="md:w-[80%] w-full mx-auto py-10 space-y-4 bg-gray-100 shadow-lg md:px-10 px-5 rounded-lg mb-10 text-left">
                <ul className="list-none space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-600 text-base">
                            <FaCheck className="text-purple-600 mt-1 min-w-[16px]" />
                            <p>
                                <span className="font-bold">{feature.title} </span>
                                <span className="font-thin">{feature.description}</span>
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            <LineDivider />
        </div>
    );
};

export default CaseStudies;
