import { FaCheck } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
const Technologies = () => {
    return (
        <div className='flex gap-20 flex-col md:flex-row md:text-left text-center justify-center items-center md:w-[90%] p-10 m-10 md:mx-auto'>
            <div className="md:w-1/2 space-y-5">
                <h2
                    className="text-xl md:text-4xl font-bold text-gray-800"
                    style={{ lineHeight: '1.3' }}
                >
                    Preparing for your success, we provide truly prominent IT solutions
                </h2>


                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    We specializes in technological and IT-related services
                </span>
                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    Technological applications play a role
                </span>
                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    It’s better to achieve little than nothing at all
                </span>
            </div>
            <div className="md:w-1/2">
                <p className="leading-8 font-thin text-gray-500 text-base">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs. building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it
                </p>

                <div className="my-10">
                    <p className="text-[#000] font-bold text-base my-2 mx-2">IT Management</p>
                    <span>
                        <ProgressBar padding={0} completed={85} />
                    </span>
                </div>
                <div className="my-10">
                    <p className="text-[#000] font-bold text-base my-2 mx-2">Data Security</p>
                    <span>
                        <ProgressBar completed={95} />
                    </span>
                </div>
                <div className="my-10">
                    <p className="text-[#000] font-bold text-base my-2 mx-2">Information Technology</p>
                    <span>
                        <ProgressBar completed={80} />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Technologies;