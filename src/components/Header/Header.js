import React, { useState } from 'react';
import CustomLink from './CustomLink/CustomLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { FaCartPlus, FaChild, FaCocktail, FaHome } from 'react-icons/fa';
// import Home from '../Home/Home';



const Header = () => {
    const navLinks = [
        { id: 1, name: "Home", path: 'home', links: <FaHome></FaHome> },
        { id: 2, name: "Cocktails", path: 'cocktails', links: <FaCocktail></FaCocktail> },
        { id: 3, name: "About Us", path: 'about_us', links: <FaChild></FaChild> },
        { id: 4, name: "Cart", path: 'cart', links: <FaCartPlus></FaCartPlus> }
    ];
    const [open, setOpen] = useState(false);
    return (
        <div>
            {/* <div> */}
            <div className='flex top-0 justify-between items-center bg-white p-4 text-white'>
                <div onClick={() => setOpen(!open)} className='w-8 h-8 md:hidden'>
                    {open ? <XMarkIcon className='text-amber-500'></XMarkIcon> : <Bars3Icon className='text-amber-400'></Bars3Icon>}
                </div>
                <div className='w-full text-xl h-10 text-amber-500 flex xl:justify-center lg:justify-start md:justify-start justify-end items-center font-extrabold'>
                    Cock <Link to="/home"><FaCocktail className='w-10 h-10 text-amber-700'></FaCocktail></Link> Tail
                </div>
                <div className={`flex lg:justify-end justify-around xl:justify-start items-center fixed  w-full max-[700px]:p-4  md:static bg-slate-100 md:bg-transparent ${open ? 'left-0 bottom-0 z-10 duration-100 ease-in' : 'bottom-[-100%]'}`}>
                    {navLinks.map(link => <CustomLink key={link.id} link={link}></CustomLink>)}
                </div>
            </div>
        </div>
    );
};

export default Header;