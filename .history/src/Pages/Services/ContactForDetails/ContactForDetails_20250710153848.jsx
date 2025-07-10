import React from 'react';

const ContactForDetails = () => {
    return (
        <div className='md:p-20 p-10 bg-purple-900 flex justify-evenly items-center text-left my-10 w-[90%] mx-auto rounded-lg '>
            <div className='w-1/2'>
                <p className='md:text-4xl text-xl font-bold leading-8 '>To make requests for further information,
                    contact us</p>
            </div>
            <div className='space-y-5'>

                <p className='text-gray-100'>Call Us For Any inquiry
                </p>
                <p className='text-gray-100'>+880 1737783615</p>
            </div>
        </div>
    );
};

export default ContactForDetails;