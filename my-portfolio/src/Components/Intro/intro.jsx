import React from "react";
import "./Intro.css";
import Github from "../../assets/img/github.png";
import Insta from "../../assets/img/instagram.png";
import linked from "../../assets/img/linkedin.png";
import Vector1 from "../../assets/img/Vector1.png";
import Vector2 from "../../assets/img/Vector2.png";
import boy from "../../assets/img/boy-r.png";
import crowun from "../../assets/img/crown.png";
import thumbup from "../../assets/img/thumbup.png";
import floatingdiv from "../Flotingdiv/flotingdiv";
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
          <img src={Github}></img>
          <img src={Insta}></img>
          <img src={linked}></img>
        </div>
      </div>

      <div className="intro-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img src={boy} />

        <div>
          <floatingdiv />
        </div>
      </div>
    </div>
  );
};

export default Intro;
