import React from "react";

import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";
import Planet from "./canvas/Planet";

function Home() {
  return (
    <section className="container-hero">
      <div className="hero-left">
        <h4>Ryan I. Mmbale</h4>
        <p>Fullstack Software Engineer | JS </p>
        <ul class="links">
          <li>
            <a href="hero">home</a>
          </li>
          <li>
            <a href="about">about</a>
          </li>
          <li>
            <a href="services">services</a>
          </li>
          <li>
            <a href="contact">contact</a>
          </li>
          <li>
            <a href="contact">Dark Mode</a>
          </li>
        </ul>

        <ul class="socials">
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

      <div className="hero-right">{/* <Planet /> */}</div>
    </section>
  );
}

export default Home;
