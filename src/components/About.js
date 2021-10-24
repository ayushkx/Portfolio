import React from "react";
import "./about.css";
import Project from "./Project";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export default function About() {
  return (
    <div>
      <div class="secondSecDiv">
        <div class="introductionDiv">
          <h2 class="h2 aboutHeading">About</h2>
          <p className="p">student, self-taught coder</p>
          <p className="p">
            studies at JSS Academy Of Technical Education, Noida
          </p>
          <p className="p">Undergraduate</p>
          <p className="p">B.E. - Information Technology</p>
          <p className="p">Aug 2019-23</p>
          <p className="p">GPA: 8.7</p>
          <p className="p">
            interested in web-development, open-source, competitive programming
          </p>
          <div>
            <div className="linkedin">
              <a href="https://www.facebook.com/BreakingBad/">
                <FaLinkedinIn className="linkedin-icon" />
              </a>
            </div>
            <div className="git">
              <a href="https://github.com/iaish-max/Breaking_Bad">
                <AiOutlineGithub className="git-icon" />
              </a>
            </div>
            <div className="ins">
              <a href="https://www.instagram.com/breakingbad/?hl=en">
                <AiOutlineInstagram className="ins-icon" />
              </a>
            </div>
            <div className="gmail">
              <a href="https://twitter.com/breakingbad?lang=en">
                <SiGmail className="gmail-icon" />
              </a>
            </div>
          </div>
        </div>
        <div class="projectDiv">
          <Project />
        </div>
      </div>
    </div>
  );
}
