import React from "react";
import logo from "../assets/kevinRushLogo.png"

import {FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
  <div className="flex flex-shrink-0 iemts-center">
    <img className="mx-2 w-10" src={logo} alt="logo" />
  </div>
  <div className="m-8 flex items-center justify-between gap-4 text-2xl">
    <a href="https://github.com/kapilraut1" target="_blank"><FaGithub />
    </a>
    <FaLinkedin />
    <FaInstagram />
   
  </div>
  </nav>
  )
}

export default Navbar;
