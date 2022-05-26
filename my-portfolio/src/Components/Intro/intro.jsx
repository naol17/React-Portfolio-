import React from "react";
import "./Intro.css";
import Github from "../../assets/img/github.png";
import Insta from "../../assets/img/instagram.png";
import linked from "../../assets/img/linkedin.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy-r.png";
import Crown from "../../assets/img/crown.png";
import Glassimo from "../../assets/img/glassesimoji.png";
import Thumbup from "../../assets/img/thumbup.png";
import Floatingdiv from "../Flotingdiv/flotingdiv";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-name">
          <span>Hey! I Am</span>
          <span>Naol Dame</span>
          <span>
            Frontend Developer and graphic designer with high creative and
            quality development, producing quality work.
          </span>
        </div>
        <button className="button intro-btn">Hire Me</button>
        <div className="intro-icon">
          <a href="www.github.com/naol17">
            <img src={Github}></img>
          </a>
          <a href="www.instagram.com/Naol Dame">
            <img src={Insta}></img>
          </a>
          <a href="www.linkedin.com/naol dame">
            <img src={linked}></img>
          </a>
        </div>
      </div>

      <div className="intro-right">
        <img src={Vector1} />
        <img src={Vector2} />

        <img src={boy} />
        <img src={Glassimo} />

        <div style={{ top: "-4%", left: "60%" }}>
          <Floatingdiv image={Crown} txt1="web" txt2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "-1rem" }}>
          <Floatingdiv image={Thumbup} txt1="Graphics" txt2="Designer" />
        </div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#c1f5ff",
            top: "17rem",
            width: "20rem",
            height: "11rem",
            left: "-10rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
