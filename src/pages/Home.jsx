import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import Planet from "../components/canvas/Planet";

//Pages
import { About, Applications, Contact, Services } from "../pages";

function toggleDarkLight() {
  const body = document.getElementById("container-hero");
  const currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function Home() {
  return (
    <section id="container-hero">
      <div className="hero-left">
        <h3>Ryan I. Mmbale</h3>
        <h2>Fullstack Software Engineer | JS </h2>
        <ul className="links ">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/services">Services</a>
          </li>
          <li>
            <a href="/contact">Contact Me</a>
          </li>
          <li>
            <a href="/applications">My Apps</a>
          </li>
          <li>
            <a href="https://coderryan.hashnode.dev/">My Blog</a>
          </li>
          <li>
            <div className="switch">
              <input
                id="toggle"
                className="cbx-toggle cbx-toggle-round-flat"
                type="checkbox"
                onClick={toggleDarkLight}
              />
              <label htmlFor="toggle"></label> <span>Theme</span>
            </div>
          </li>
        </ul>

        <ul className="socials">
          <li>
            <a href="https://github.com/ryannthegr8">
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/_ryan.im/">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ryan-mmbale-392220216/">
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/coderRyan_m">
              <FaXTwitter />
            </a>
          </li>
          <li>
            <a href="https://www.buymeacoffee.com/mmbaleryan1">
              <SiBuymeacoffee />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@ryann_me">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>

      <div className="hero-right">
        <Planet />
        <p id="copyright">@2023 Ryan. All Rights Reserved</p>
      </div>
    </section>
  );
}

export default Home;
