import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex jsutify-between items-center max-w-7xl max-auto">
        <Link
          to="/"
          className="flex items-center gap-5"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer ">Lucien <span className="sm:block hidden"> Masudi</span></p>
        </Link> 
        <ul className="list-none float-right md:float-left hidden sm:flex flex-row gap-10 justify-end items-center ml-auto">
          {navLinks.map((Link) =>(
            <li
              key={Link.id}
              className={`${
                active === Link.title
                  ? "text-white"
                  :"text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
              src={toggle ? close : menu}
              alt="nemu"
              className="w-[28px] h-[28px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
              />

              <div className={`${!toggle
                ? "hidden"
                :"flex" } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>

              </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar