// src/components/Navbar.js

// import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">
                    My Portfolio
                </Link>
                <ul className="flex">
                    <li className="mr-4">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="mr-4">
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
