import { FaCheck } from "react-icons/fa";
import ProgressBar from "@ramonak/react-progress-bar";
import { easeBackIn, easeBounceIn } from "d3-ease";
const Technologies = () => {
    return (
        <div className='flex gap-20 flex-col md:flex-row md:text-left text-center justify-center items-center md:w-[90%] p-10 m-10 md:mx-auto'>
            <div className="md:w-1/2 space-y-5">
                <h2
                    className="text-xl md:text-4xl font-bold text-gray-800"
                    style={{ lineHeight: '1.3' }}
                >
                    Our Culture
                </h2>
                <p className="text-lg text-gray-700 font-bold">We are a team of thinkers, builders, and creators. Our culture is rooted in:</p>


                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    Innovation First: Always evolving, always learning.
                </span>
                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    Integrity: Delivering what we promise.
                </span>
                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    Collaboration: Working across cultures and time zones.
                </span>
                <span className='font-thin text-gray-500 text-base flex gap-2 items-center'>
                    <FaCheck className="text-purple-600 " />
                    Excellence: Going the extra mile to ensure quality.
                </span>
            </div>
            <div className="md:w-1/2">
                <p className="leading-8 font-thin text-gray-500 text-base">We believe people do their best work when they are valued, empowered, and inspired. Our vibrant work environment is designed to foster creativity, learning, and fun. At Ultracore, you’re not just an employee — you’re part of a global family.
                </p>

                <div className="my-10">
                    <p className="text-[#000] font-bold text-base my-2 mx-2">IT Management</p>
                    <span>
                        <ProgressBar
                            completed={85}
                            animateOnRender={true}
                            transitionDuration="1.5s"
                            transitionTimingFunction="ease-in-out"
                            height="15px"
                            padding={0}
                        />
                    </span>
                </div>
                <div className="my-10">
                    <p className="text-[#000] font-bold text-base my-2 mx-2">Data Security</p>
                    <span>
                        <ProgressBar
                            completed={95}
                            animateOnRender={true}
                            transitionDuration="1.5s"
                            transitionTimingFunction="ease-in-out"
                            height="15px"
                            padding={0}
                        />
                    </span>
                </div>
                <div className="my-10">
                    <p className="text-[#000] font-bold text-base my-2 mx-2">Information Technology</p>
                    <span>
                        <ProgressBar
                            completed={80}
                            animateOnRender={true}
                            transitionDuration="1.5s"
                            transitionTimingFunction="ease-in-out"
                            height="15px"
                            padding={0}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Technologies;