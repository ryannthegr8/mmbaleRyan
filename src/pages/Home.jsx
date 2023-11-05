import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import Planet from "../components/canvas/Planet";

//Pages
import { About, Applications, Contact, Services } from "../pages";

//components
import { Nav } from "../components";

function Home() {
  return (
    <>
      <div id="site-container">
        <section id="home">
          <div className="hero-left">
            <h3>Ryan I. Mmbale</h3>
            <h2>Fullstack Software Engineer | JS </h2>
            <ul className="links ">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">About Me</a>
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
          </div>
        </section>
        <section id="about">
          <About />
        </section>
        <section id="applications">
          <Applications />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Home;
