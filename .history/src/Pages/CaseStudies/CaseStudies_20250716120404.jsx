import React from 'react';
import CustomHeader from '../../Components/CustomHeader/CustomHeader';
import { FaCheck } from 'react-icons/fa';
import Divider from '../../Components/Divider/Divider';

const CaseStudies = () => {
    return (
        <div>
            <CustomHeader subHeading="Why Ultracore?" heading="Case Studies"></CustomHeader>
            <div className="w-[80%] mx-auto py-10 text-left space-y-5 justify-center bg-gray-300 shadow-xl mb-10">
                <span className="font-thin text-gray-500 text-base flex gap-2 items-center">
                    <FaCheck className="text-purple-600" />
                    <span className="font-bold">World-Class Engineering:</span> Our team comprises top talent with global experience and technical depth.
                </span>
                <span className="font-thin text-gray-500 text-base flex gap-2 items-center">
                    <FaCheck className="text-purple-600" />
                    <span className="font-bold">Proven Delivery:</span> We’ve shipped products that scale — from startups to enterprise.
                </span>
                <span className="font-thin text-gray-500 text-base flex gap-2 items-center">
                    <FaCheck className="text-purple-600" />
                    <span className="font-bold">Global Vision, Local Execution:</span> We bring the best of both worlds: a global mindset with local agility.
                </span>
                <span className="font-thin text-gray-500 text-base flex gap-2 items-center">
                    <FaCheck className="text-purple-600" />
                    <span className="font-bold">Innovation as a Service:</span> We don’t just build — we solve. We strategize, design, develop, and iterate.
                </span>
                <span className="font-thin text-gray-500 text-base flex gap-2 items-center">
                    <FaCheck className="text-purple-600" />
                    <span className="font-bold">People-Centric Culture:</span> We don’t just build — we solve. We strategize, design, develop, and iterate.
                </span>
            </div>

            <Divider></Divider>




        </div>
    );
};

export default CaseStudies;