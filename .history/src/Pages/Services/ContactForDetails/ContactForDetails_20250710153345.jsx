import React from 'react';

const ContactForDetails = () => {
    return (
        <div className='md:p-20 p-10 bg-purple-900 flex text-left my-10 w-[90%] mx-auto rounded-lg gap-10 '>
            <div className=''>
                <h2 className='md:text-4xl text-xl font-bold leading-[1] '>To make requests for further information,
                    contact us</h2>
            </div>
            <div className='space-y-10'>

                <p className='text-gray-100'>Call Us For Any inquiry
                </p>
                <span className='text-gray-100'>+880 1737783615</span>
            </div>
        </div>
    );
};

export default ContactForDetails;