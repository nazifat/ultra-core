import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png'
import CustomButton from '../CustomButton/CustomButton';
import { MdOutlineMenu } from "react-icons/md";


const NavBar = () => {

    const links = <>
        <li className='custom-navbar'><NavLink to="/about">About Us</NavLink></li>
        <li className='custom-navbar'><NavLink to="/Services">Services</NavLink></li>
        <li className='custom-navbar'><NavLink to="/case-studies">Case Studies</NavLink></li>
        <li className='custom-navbar'><NavLink to="/blog">Blog</NavLink></li>
        <li className='custom-navbar'><NavLink to="/how-it-works">How it Works</NavLink></li>
        <li className='custom-navbar'> <NavLink to="/hire">Hire</NavLink></li>
    </>
    return (
        <div className="navbar w-full shadow">
            <div className="navbar-start">
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn btn-lg bg-gray-100 border-0 mx-2  lg:hidden  ">
                    <MdOutlineMenu  className='text-gray-600'/>
                    </div>
                    <ul
                        // tabIndex={0}
                        className="menu menu-md dropdown-content bg-white z-1 mt-3 w-52 p-5 shadow flex ">
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
            <CustomButton
                            className="justify-end"
                            btnText="Let's work Together"
                        />
                {/* <CustomButton justifyPosition="end" btnText="Let's work Together"></CustomButton> */}

            </div>
        </div>
    );
};

export default NavBar;