import React from "react";

//Icons
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FaXTwitter, FaTiktok } from "react-icons/fa6";
import { SiBuymeacoffee } from "react-icons/si";

//3D object
import Planet from "../components/canvas/Planet";

//Pages
import { About, Portfolio, Contact, Services } from "../pages";

//Components
import { Nav } from "../components";

function Home() {
  return (
    <>
      <div id="site-container">
        <section id="home">
          <div className="hero-left ">
            <h3 className="hero-text">Bienvenue!</h3>
            <h3 className="hero-text">I Am Ryan I. Mmbale</h3>
            <h1 className="hero-text" id="purpleItem">
              Fullstack Software Engineer | JS{" "}
            </h1>
            <p className="tagline">
              I Craft Software, For Diverse Clients, Prioritizing Originality
              With Precision, Flair and Finesse.
            </p>

            <ul className="socials">
              <li>
                <a href="https://github.com/ryannthegr8" data-tooltip="GitHub">
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_ryan.im/"
                  data-tooltip="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/ryan-mmbale-392220216/"
                  data-tooltip="Linked In"
                >
                  <AiFillLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/coderRyan_m"
                  data-tooltip="Twitter"
                >
                  <FaXTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.buymeacoffee.com/mmbaleryan1"
                  data-tooltip="BuyMeCoffee"
                >
                  <SiBuymeacoffee />
                </a>
              </li>
              <li>
                <a
                  href="https://www.tiktok.com/@ryann_me"
                  data-tooltip="TikTok"
                >
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
        <section id="portfolio">
          <Portfolio />
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
