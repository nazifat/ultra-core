import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className=" custom-footer footer  sm:footer-horizontal text-gray-600 text-neutral-content p-10 md:gap-2 md:flex" >
                <nav className='flex-[1] min-w-[200px]' >
                    <NavLink to="/"> <img src={logo} alt="" /></NavLink>

                    <p className='text-left'>At our software company, we combine creativity and technology to deliver innovative solutions. Our collaborative team transforms bold ideas into impactful software that drives success for businesses and users alike
                    </p>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Links</h6>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/caseStudies">Case Studies</NavLink>
                    <NavLink to="/howItWorks">How it Works</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/career">Career</NavLink>
                    <NavLink to="/areasWeServer">Areas We Serve</NavLink>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Contact Us</h6>
                    <p className="flex items-center gap-2"><FaPhoneAlt />+880 1737783615</p>
                    <p className="flex items-center gap-2"><FaEnvelope /> info@ultracorecreatives.com</p>
                    <p className="flex items-center gap-2"><FaLocationDot /> Dhaka, Bangladesh</p>
                </nav>



            </footer>
            <aside>
                <p> © {new Date().getFullYear()}  Ultracore Creatives. All rights reserved.</p>
            </aside>

        </div>


    );
};

export default Footer;