import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import logoImage from "../assets/real-estate-house.png";

const Header = () => {
  // const [nav, setNav] = useState(false);

  // const links = [
  //   {
  //     id: 1,
  //     link: "home",
  //   },
  //   {
  //     id: 2,
  //     link: "about",
  //   },
  //   {
  //     id: 3,
  //     link: "portfolio",
  //   },
  //   {
  //     id: 4,
  //     link: "contact",
  //   },
  // ];

  // const handleLogoClick = () => {
  //   setNav(false);

  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  return (
    <div className="navbar flex justify-between items-center w-full h-14   text-black bg-gray-100 ">
      <div>
        <Link  to="home" className="flex items-center ms-5">
          <img  src={logoImage} alt="Logo" className="h-30 w-40   " />
        </Link>
        
      </div>
      <a className="text-2xl   items-center mr-30">
  XYZ SYSTEMS LLP
</a>

      <div>
        
        {/* <Link
          to="home"
          className="text-2xl justify-between items-center font-serif px-40  font-bold"
        >
          XYZ SYSTEMS LLP
        </Link> */}
      </div>

      {/* <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-8  cursor-pointer capitalize font-medium 
            text-gray-300 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul> */}

      {/* <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div> */}
      {/* {nav && (
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
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default Header;
