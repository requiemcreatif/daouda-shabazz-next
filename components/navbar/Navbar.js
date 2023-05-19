import React, { useState } from "react";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import Logo from "../../images/logo/Logo.svg";
import Image from "next/image";

const style = {
  color: "#000",
  fontSize: "4rem",
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    console.log("opened");
    setIsOpen(!isOpen);
    document.querySelector(".mobile-nav").classList.toggle("closed");
  };
  return (
    <>
      <div className="navbar-div flex lg:flex lg:bg-black text-white lg:text-[1.5rem] lg:font-semibold mx-0  lg:justify-center py-[1rem] px-[2rem] gap-10 fixed top-0 left-0 right-0 z-50 lg:h-[6rem]">
        {/* <div className=" p-5">
          <Image width={50} src={Logo} alt="Logo Daouda-Shabazz" />
        </div> */}

        <nav className=" p-5  lg:text-[1.5rem] ">
          <ul className="lg:flex hidden lg:flex-row text-black lg:text-white gap-10 lg:gap-5 cursor-pointer ">
            <li className="  hover:text-red-700">
              <Link href="/">PORTRAITS</Link>
            </li>
            <li className="  hover:text-red-700">
              <Link href="/editorials">EDITORIALS</Link>
            </li>
            <li className="  hover:text-red-700">
              <Link href="/apropos">A PROPOS</Link>
            </li>
            <li className="  hover:text-red-700">
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>

        <div className=" p-5">
          <ul className="flex gap-5 pt-1 ">
            <li className="  hover:text-red-700">
              <AiOutlineInstagram />
            </li>
            <li className="  hover:text-red-700">
              <ImFacebook />
            </li>
          </ul>
        </div>
        {/* <div className="p-5">
          <div className=" lg:hidden flex justify-between fixed ">
            <Image width={50} src={Logo} alt="Logo Daouda-Shabazz" />
            <GiHamburgerMenu style={style} onClick={toggle} />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Navbar;
