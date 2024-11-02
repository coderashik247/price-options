import React, { useState } from 'react';
import Link from '../Link/Link';
import { HiMenuAlt1 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About Us' },
        { id: 3, path: '/services', name: 'Our Services' },
        { id: 4, path: '/contact', name: 'Contact Us' },
        { id: 5, path: '/login', name: 'Login' },
    ];


    return (
        <nav className='text-black bg-yellow-200 p-6' >
            <div className='text-3xl md:hidden' onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <RxCross2 /> :
                        <HiMenuAlt1 />
                }
            </div>

            <ul className={`md:flex absolute md:static
                ${open === true ? 'top-16':'-top-60'}
                duration-1000 bg-yellow-200 px-6`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;