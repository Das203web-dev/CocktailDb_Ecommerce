import React from 'react';
// import { FaAccusoft } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
// import './CustomLink.css'

const CustomLink = (props) => {
    const { name, path, links } = props.link;
    return (
        <NavLink
            to={`${path}`}
            style={({ isActive, isPending }) => {

                return {
                    color: isActive ? "#F59E0B" : "black",
                    fontWeight: '900',
                    fontSize: '18px'
                };
            }}
            // activeClassName="active"
            // isActive={(match, location) => {
            //     if (match) {
            //         return true;
            //     }

            //     if (path === 'home' && location.pathname === '/') {
            //         return true;
            //     }

            //     return false;
            // }}

            className={({ isActive, isPending }) => {
                return isActive ? "active" : isPending ? "pending" : "";
            }}
        >

            <div>
                <div className='md:hidden'>
                    {links}
                </div>
                <div className='navLink_Div max-[768px]:hidden lg:ml-8 xl:ml-10'>
                    {name}
                </div>
            </div>
        </NavLink>
    );
};

export default CustomLink;