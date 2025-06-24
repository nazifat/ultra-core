import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer sm:footer-horizontal text-gray-700 text-neutral-content p-10">
                <nav >
                    <NavLink to="/"> <img src={logo} alt="" /></NavLink>

                    <p className='text-left'>At our software company, we combine creativity and technology to deliver innovative solutions. Our collaborative team transforms bold ideas into impactful software that drives success for businesses and users alike
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Links</h6>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/caseStudies">Case Studies</NavLink>
                    <NavLink to="/howItWorks">How it Works</NavLink>
                    <NavLink to="/blog">Blog</NavLink>
                    <NavLink to="/career">Career</NavLink>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <p><FaPhoneAlt/>+880 1737783615</p>
                </nav>



            </footer>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </aside>

        </div>


    );
};

export default Footer;