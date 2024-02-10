import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { BsPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'Dashboard',
    },
    {
      id: 3,
      link: 'Products',
    },
    {
      id: 4,
      link: 'Transactions',
    },
    {
        id: 5,
        link: 'Journal',
      },
  ];

  const handleLogoClick = () => {
    setNav(false);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="navbar flex justify-between items-center w-full h-20 px-4 text-black bg-white ">
       <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden "
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={40} />}
      </div>

      <ul className="hidden  md:flex  lg:ml-80 text-lg px 2xl:ml-80     ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium 
            text-black hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
          
        ))}
      </ul>

     
      {nav && (
        <ul
          className="flex flex-col justify-center items-center
          absolute top-0 left-0 w-full h-screen bg-gradient-to-b
          from-black to-gray-800 text-gray-500"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
<div className="mt-8  flex flex-col items-center">
  <BsPersonLinesFill size={30} />
  <span className="mt-2 text-lg ">Joseph Lazar</span>
</div>

    </div>
  );
};

export default Navbar;
