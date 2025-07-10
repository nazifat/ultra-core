import { TfiHeadphoneAlt } from "react-icons/tfi";
const ContactForDetails = () => {
    return (
        <div className='md:p-20 p-10 bg-purple-900 flex justify-evenly items-center text-left my-10 w-[90%] mx-auto rounded-lg '>
            <div className='w-1/2'>
                <p className="md:text-4xl text-xl font-bold" style={{ lineHeight: '3.5rem' }}>
                    To make requests for further information, contact us
                </p>
            </div>
            <div className='space-y-5 text-center justify-center flex-col'>
                <span><TfiHeadphoneAlt className="text-4xl text-center" />
                </span>
                <p className='text-gray-100 text-center'>Call Us For Any inquiry
                </p>
                <p className='text-gray-100 text-center'>+880 1737783615</p>
            </div>
        </div>
    );
};

export default ContactForDetails;