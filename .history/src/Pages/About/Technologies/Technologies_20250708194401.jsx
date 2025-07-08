import { FaCheck } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className='flex gap-10 flex-col md:flex-row'>
            <div>
                <h2 className='md:text-4xl text-xl text-gray-600 font-bold'>Preparing for your success, we provide truly prominent IT solutions
                </h2>
                <span className='font-thin text-gray-500 text-base'>
                    <FaCheck />
                    We specializes in technological and IT-related services
                </span>
            </div>
            <div></div>
        </div>
    );
};

export default Technologies;