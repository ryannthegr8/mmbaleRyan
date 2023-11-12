import React from "react";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { RiServerLine, RiContactsLine } from "react-icons/ri";
import { useState } from "react";

function Nav() {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav className="navbar">
      <a
        href="#home"
        onClick={() => setActiveNav("/")}
        className={activeNav === "/" ? "active" : ""}
      >
        {" "}
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("/about")}
        className={activeNav === "/about" ? "active" : ""}
      >
        {" "}
        <AiOutlineUser />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("/portfolio")}
        className={activeNav === "/applications" ? "active" : ""}
      >
        {" "}
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("/services")}
        className={activeNav === "/services" ? "active" : ""}
      >
        {" "}
        <RiServerLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("/contact")}
        className={activeNav === "/contact" ? "active" : ""}
      >
        {" "}
        <RiContactsLine />
      </a>
    </nav>
  );
}

export default Nav;
