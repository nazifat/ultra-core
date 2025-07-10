import { TfiHeadphoneAlt } from "react-icons/tfi";
const ContactForDetails = () => {
    return (
        <div className='md:p-20 p-10 bg-purple-900 flex justify-center items-center text-left my-10 w-[90%] mx-auto rounded-lg '>
            <div className='flex gap-2 '>
                <span className="w-1 bg-gradient-to-b from-purple-500 to-pink-500 block"></span>

                <p className="md:text-4xl text-xl font-bold" style={{ lineHeight: '3.5rem' }}>
                    To make requests for further information, contact us
                </p>
            </div>
            <div className='space-y-5 text-center w-1/2 mx-auto'>
                <div className="flex justify-center">
                    <TfiHeadphoneAlt className="text-4xl text-gray-100" />
                </div>
                <p className='text-gray-100'>Call Us For Any Inquiry</p>
                <p className='text-gray-100'>+880 1737783615</p>
            </div>

        </div>
    );
};

export default ContactForDetails;