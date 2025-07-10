import { TfiHeadphoneAlt } from "react-icons/tfi";
const ContactForDetails = () => {
    return (
        <div className='md:p-20 p-10 bg-gradient-to-r from-purple-800 via-fuchsia-600 to-pink-500 flex md:flex-row flex-col justify-center items-center text-left my-10 w-[90%] mx-auto rounded-lg'>
            <div className='flex gap-2 '>
                <span className="w-2 bg-gradient-to-b from-purple-500 to-pink-500 md:block hidden"></span>

                <p className="md:text-4xl text-xl font-bold mb-10 text-center md:text-left" style={{ lineHeight: '2rem' }}>
                    To make requests for further information, contact us
                </p>
            </div>
            <div className='space-y-5 text-center w-1/2 mx-auto'>
                <div className="flex justify-center">
                    <TfiHeadphoneAlt className="text-4xl text-gray-100" />
                </div>
                <p className='text-gray-100 text-lg font-medium'>Need Assistance? We're Here to Help</p>
                <p className='text-gray-100 text-xl font-semibold tracking-wide'>+880 1737 783 615</p>

            </div>

        </div>
    );
};

export default ContactForDetails;