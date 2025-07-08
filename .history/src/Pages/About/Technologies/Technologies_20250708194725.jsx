import { FaCheck } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className='flex gap-10 flex-col md:flex-row md:text-left text-center justify-center items-center md:w-full p-10 m-10 md:mx-auto'>
            <div className="w-">
                <h2 className='md:text-4xl text-xl text-gray-600 font-bold'>Preparing for your success, we provide truly prominent IT solutions
                </h2>
                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck />
                    We specializes in technological and IT-related services
                </span>
            </div>
            <div>
                <p className="font-thin text-gray-500 text-base">Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs. building cloud, infrastructure, network, etc. We put a strong focus on the needs of your business to figure out solutions that best fits your demand and nail it
                </p>
            </div>
        </div>
    );
};

export default Technologies;