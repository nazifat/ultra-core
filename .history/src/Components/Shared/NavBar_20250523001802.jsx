import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import CustomButton from '../CustomButton/CustomButton';
import { MdOutlineMenu } from "react-icons/md";


const NavBar = () => {

    const links = <>
        <li className='custom-navbar'><NavLink to="/about">About Us</NavLink></li>
        <li className='custom-navbar'><NavLink to="/Services">Services</NavLink></li>
        <li className='custom-navbar'><NavLink to="/caseStudies">Case Studies</NavLink></li>
        <li className='custom-navbar'><NavLink to="/blog">Blog</NavLink></li>
        <li className='custom-navbar'><NavLink to="/howItWorks">How it Works</NavLink></li>
        <li className='custom-navbar'> <NavLink to="/hire">Hire</NavLink></li>
    </>
    return (
        <div className="navbar shadow">
            <div className="navbar-start">
                <div className="dropdown  bg-gradient-to-r from-[#F76680] to-[#57007B]">
                    <div tabIndex={0} role="button" className="btn lg:hidden  ">
                    <MdOutlineMenu  className='bg-gray-500'/>
                    </div>
                    <ul
                        // tabIndex={0}
                        className="menu menu-sm dropdown-content  z-1 mt-3 w-52 p-5 shadow flex ">
                        {links}
                    </ul>
                </div>
                <NavLink className=" text-xl" to='/'><img src={logo} alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}

                </ul>
            </div>
            <div className="navbar-end">
                <CustomButton btnText="Let's work Together"></CustomButton>

            </div>
        </div>
    );
};

export default NavBar;