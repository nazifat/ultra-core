import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FaEnvelope, FaFacebook, FaFacebookF, FaFacebookSquare, FaInstagram, FaLinkedin, FaLinkedinIn, FaLocationArrow, FaPhoneAlt, FaTwitter } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
import LineDivider from '../Divider/LineDivider';
const Footer = () => {
    return (
        <div>
            <footer className="lg:px-20 custom-footer footer  sm:footer-horizontal text-gray-600 text-neutral-content p-10  flex md:flex-row flex-col md:justify-evenly md:p-6 " >
                <nav className='flex-[1] min-w-[200px]' >
                    <NavLink to="/"> <img src={logo} alt="" /></NavLink>

                    <p className='text-left'>At our software company, we combine creativity and technology to deliver innovative solutions. Our collaborative team transforms bold ideas into impactful software that drives success for businesses and users alike
                    </p>
                </nav>
                <nav className='flex-1 justify-center'>
                    <h6 className="">Links</h6>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/caseStudies">Case Studies</NavLink>
                    <NavLink to="/howItWorks">How it Works</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/career">Career</NavLink>
                    <NavLink to="/areasWeServer">Areas We Serve</NavLink>
                </nav>
                <nav className='flex-1 justify-center'>
                    <h6 className="">Contact Us</h6>
                    <p className="flex items-center gap-2"><FaPhoneAlt />+880 1737783615</p>
                    <p className="flex items-center gap-2"><FaEnvelope /> info@ultracorecreatives.com</p>
                    <p className="flex items-center gap-2"><FaLocationDot /> Dhaka, Bangladesh</p>
                </nav>
                <nav className='flex-1 justify-center flex items-center justify-center mt-10'>

                    <button className="btn btn-circle bg-gray-100 text-base-100 border-gray-100">
                        <FaFacebookF></FaFacebookF>
                    </button>
                    <button className="btn btn-circle bg-gray-100 text-base-100 border-gray-100">
                        <FaInstagram></FaInstagram>
                    </button>
                    <button className="btn btn-circle bg-gray-100 text-base-100 border-gray-100">
                        <FaTwitter></FaTwitter>
                    </button>
                    <button className="btn btn-circle bg-gray-100 text-base-100 border-gray-100">
                        <FaLinkedinIn />
                    </button>

                </nav>





            </footer>

                <LineDivider></LineDivider>
            <aside className='lg:px-20'> 
                <p className='text-center text-[#718096] pb-5'> © {new Date().getFullYear()}  Ultracore Creatives. All rights reserved.</p>
            </aside>

        </div>


    );
};

export default Footer;