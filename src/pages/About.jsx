import React from "react";

import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoMongodb,
  BiLogoJava,
  BiLogoPython,
  BiLogoGithub,
} from "react-icons/bi";
import { GrAndroid } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineConsoleSql } from "react-icons/ai";

import Me from "../assets/me.jpeg";

//3D object
// import PurpleDiamond from "../components/canvas/PurpleDiamond";

function About() {
  return (
    <>
      <section className="aboutContainer">
        <div className="me">
          <h3>About me</h3>
          <p className="tagline" id="purpleItem">
            - Get To Know Me -
          </p>
          <div className="myImage">
            <img src={Me}></img>
          </div>
        </div>
        <div className="aboutMe">
          <h3 className="heading">A Little About Ryan</h3>
          <div className="myWords">
            You are welcome to my website, feel free to get to know me through
            this website. My passion for software development comes from way
            back in 2016 since my initial computer interactions while I was in
            highschool and it all started from there. With a knack for
            problem-solving and serendipity I've honed my skills in software
            development and agile methodologies. Continuously learning and
            evolving, I seek not just to code but to craft elegant, efficient,
            and user-centric software, to contribute impactful, forward-looking
            solutions in the ever-evolving tech landscape.
            <p id="purpleItem">
              <FaLocationDot /> Nairobi, Kenya - Remote
            </p>
          </div>
          <h2 className="head-skills">Major TechStack</h2>
          <div className="mySkills">
            <div className="skill">
              <BiLogoJavascript /> JavaScript
            </div>
            <div className="skill">
              <BiLogoHtml5 /> HTML
            </div>
            <div className="skill">
              <BiLogoCss3 /> CSS
            </div>
            <div className="skill">
              <BiLogoReact /> React
            </div>
            <div className="skill">
              <BiLogoMongodb /> MongoDB
            </div>
            <div className="skill">
              <GrAndroid /> Android
            </div>
            <div className="skill">
              <BiLogoJava /> Java
            </div>
            <div className="skill">
              <BiLogoPython /> Python
            </div>
            <div className="skill">
              <AiOutlineConsoleSql />
              SQL
            </div>
            <div className="skill">
              <BiLogoGithub /> GitHub
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
