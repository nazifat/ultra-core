import React from 'react';
import '../Contact/Contact.css'
import CustomButton from '../../Components/CustomButton/CustomButton';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';

const Contact = () => {
    return (
        <div className='py-10'>
            <HeaderBanner img="" title="Contact Us"></HeaderBanner>
            <h2 className="text-3xl mt-4 font-bold text-center mb-4 bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
                We’re excited to collaborate with you.
            </h2>

            <p className="text-center text-lg text-gray-600 mb-10">
                Let’s build something great together.
            </p>

            <div className="mx-auto px-4 text-gray-800 flex justify-center items-start gap-10">


                <div>
                    {/* Contact Form */}
                    <form className="space-y-6 bg-white shadow-md rounded-lg p-8 contact">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Company</label>
                                <input
                                    type="text"
                                    name="company"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Phone <span className="text-sm text-gray-400"></span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700">Project Brief</label>
                            <textarea
                                name="brief"
                                rows="5"
                                className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
                                required
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <CustomButton btnText="Submit" />
                        </div>

                    </form>
                </div>


                {/* Office Info */}
                <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Offices</h3>
                    <p className="text-gray-700">Dhaka, Bangladesh (HQ)</p>

                    <div className="mt-6 text-gray-700">
                        <p>
                            Email:{' '}
                            <a
                                href="mailto:hello@ultracorecreatives.com"
                                className="text-blue-600 hover:underline"
                            >
                                hello@ultracorecreatives.com
                            </a>
                        </p>
                        <p>Phone: +880 1737783615</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
