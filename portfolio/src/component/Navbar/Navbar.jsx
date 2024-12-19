import React from 'react';
import { Link } from 'react-scroll';
import '../../index.css';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-[#18181b] text-white font-funnel z-50">
      <div className="text-2xl font-bold">
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Phuc Huynh
        </Link>
      </div>
      <div className="flex-grow text-center">
        <ul className="flex justify-end space-x-8">
          <li>
            <Link to="about" smooth={true} duration={500} className="underline-animation pr-2 cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link to="project" smooth={true} duration={500} className="underline-animation pr-2 cursor-pointer">
              Project
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="underline-animation pr-2 cursor-pointer">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;