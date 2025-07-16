import React from 'react';
import '../Contact/Contact.css'
import CustomButton from '../../Components/CustomButton/CustomButton';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import LineDivider from '../../Components/Divider/LineDivider';
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';

const Contact = () => {
    return (
        <div className='py-10'>
            <Helmet>
                <title>Contact | Ultracore Creatives</title>
                <meta name="description" content="Welcome to our homepage" />
            </Helmet>
            <HeaderBanner img="https://i.ibb.co/N6r4jNj5/julian-hochgesang-Dkn8-z-PIbwo-unsplash.jpg" title="Contact Us"></HeaderBanner>
            <div>
                <div>
                    <h2 className="text-3xl mt-4 pt-5 font-bold text-center mb-4 bg-gradient-to-l from-pink-300 to-purple-900 text-transparent bg-clip-text">
                        We’re excited to collaborate with you.
                    </h2>

                    <p className="text-center text-lg text-gray-600 mb-10">
                        Let’s build something great together.
                    </p>
                </div>
                <div className="px-4 text-gray-800 flex flex-col md:flex-row mb-10 justify-center w-full items-center md:items-start gap-20">

                    <div className='w-full'>
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
                                <div className='w-[90%]]'>
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
                    <div className="mt-16 border-t pt-10 text-center text-gray-800">
                        <h3 className="text-2xl font-bold mb-4">Our Offices</h3>

                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-700">
                                <FiMapPin className="text-purple-500 text-lg" />
                                <span>Dhaka, Bangladesh (HQ)</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                                <FiMail className="text-purple-500 text-lg" />
                                <a
                                    href="mailto:hello@ultracorecreatives.com"
                                    className="text-purple-500 hover:underline"
                                >
                                    hello@ultracorecreatives.com
                                </a>
                            </div>

                            <div className="flex items-center gap-2 text-gray-700">
                                <FiPhone className="text-purple-500 text-lg" />
                                <span>+880 1737 783615</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <LineDivider></LineDivider>
        </div>
    );
};

export default Contact;
