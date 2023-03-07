import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex jsutify-between items-center max-w-7xl max-auto">

      </div>
    </nav>
  )
}

export default Navbar