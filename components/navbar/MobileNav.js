import React from "react";
import Link from "next/link";
import Logo from "../../images/logo/Logo.svg";
import { ImFacebook } from "react-icons/im";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const style = {
  color: "#000",
  fontSize: "4rem",
};

const MobileNav = ({ isOpen, setIsOpen, toggle }) => {
  return (
    <div className="  text-white font-extrabold bg-black p-5 fixed top-0 left-0 right-0 z-40 h-full lg:hidden">
      <div className="p-5">
        <div className=" lg:hidden flex justify-between fixed ">
          <Image width={50} src={Logo} alt="Logo Daouda-Shabazz" />
          <GiHamburgerMenu style={style} onClick={toggle} />
        </div>
      </div>
      <div className=" flex justify-between">
        <Image width={50} height={50} src={Logo} alt="Logo Daouda-Shabazz" />
        <div className="div-close">
          <AiOutlineClose
            onClick={() => setIsOpen(!isOpen)}
            className="close"
          />
        </div>
      </div>
      <nav className=" flex justify-between  text-white text-[7vw]">
        <ul>
          <li className="  hover:text-red-700">
            <Link href="/">PORTRAITS</Link>
          </li>
          <li className="  hover:text-red-700">EDITORIALS</li>
          <li className="  hover:text-red-700">
            <Link href="/apropos">A PROPOS</Link>
          </li>
          <li className="  hover:text-red-700">
            <Link href="/contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
      <div className="social">
        <ul className="flex">
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <ImFacebook />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
