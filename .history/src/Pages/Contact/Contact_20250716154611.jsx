import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-6">We’re excited to collaborate with you.</h2>
            <p className="text-center text-lg mb-10">Let’s build something great together.</p>

            {/* Contact Form */}
            <form className="space-y-6 bg-white shadow-md rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" name="name" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Company</label>
                        <input type="text" name="company" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone <span className="text-gray-400">(Optional)</span></label>
                        <input type="tel" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md p-2" />
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Project Brief</label>
                    <textarea name="brief" rows="5" className="mt-1 block w-full border border-gray-300 rounded-md p-2" required></textarea>
                </div>
                <div>
                    <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                        Submit
                    </button>
                </div>
            </form>

            {/* Office Info */}
            <div className="mt-12 text-center">
                <h3 className="text-xl font-semibold mb-2">Offices</h3>
                <p>Dhaka, Bangladesh (HQ)</p>
                <p className="text-gray-400">[Optional: Add planned/global office locations]</p>

                <div className="mt-6">
                    <p>Email: <a href="mailto:hello@ultracorecreatives.com" className="text-blue-600 underline">hello@ultracorecreatives.com</a></p>
                    <p>Phone: +880-XXXX-XXXXXX</p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
