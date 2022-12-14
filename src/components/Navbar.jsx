import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from 'react-icons/ai'
import { BsPersonFill } from 'react-icons/bs'

import { Link } from "react-router-dom";
import logo from '../images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        const loggedInUser = localStorage.getItem("token");

        /// validate token  hee
        // .......

        if (loggedInUser) {
            setAuthenticated(loggedInUser)
        }
    }, [])

    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            {/* Left side */}
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <Link to="/"> <img src={logo} alt="" className='width-2' /></Link>
            </div>


            {/* Login Buttons */}

            <div className='hidden md:flex items-center space-x-2'>
                {authenticated &&
                    <div>
                        <Link to={"/signup"}>                <button className='py-2'>
                            Log out
                        </button></Link>
                    </div>}
                {!authenticated &&
                    <div><Link to={"/login"}> <button className='bg-blue-500 text-white flex items-center py-2 '>
                        <BsPersonFill size={20} className='mr-2' />
                        Log In
                    </button></Link>
                        <Link to={"/signup"}>                <button className='py-2'>
                            Sign Up
                        </button></Link>
                    </div>
                }



            </div>
            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className='bg-orange-900/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer' />
                <h2 className='text-2xl p-4'>Gogos <span className='font-bold'>Recipes</span></h2>
                <nav>
                    <ul className='flex flex-col p-4 text-gray-800'>
                        <li className='text-xl py-2 flex'>Explore</li>
                        <li className='text-xl py-2 flex'>Trending</li>
                        <li className='text-xl py-2 flex'>Login</li>
                        <li className='text-xl py-2 flex'>About us</li>
                    </ul>

                </nav>
            </div>

        </div>
    )
}

export default Navbar