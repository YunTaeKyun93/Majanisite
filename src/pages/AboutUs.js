import React from "react";
import logo from "./AboutUsImg/logo1.png";
import img1 from "./AboutUsImg/main.png";
import img2 from "./AboutUsImg/aboutUsImg3.jpg";
import img3 from "./AboutUsImg/aboutUsImg2.jpg";
import img4 from "./AboutUsImg/aboutUsImg4.png";
import styles from "./styles/AboutUs.module.css";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";

const ss = classNames.bind(styles);

const AboutUs = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className={ss("aboutUsWrap")}>
      <div className={ss("mainWrap")}>
        <img src={img1} className={ss("mainImg")}/>
        <div className={ss("LogoWrap")}>
          <img
            src={logo}
            className={ss("mainImgLogo")}      
            onClick={goToHome}
          />
        </div>
      </div>
      <div className={ss("con1Wrap")}>
      <img src={img3} />
      </div>
      <div className={ss("con2Wrap")}>
      <img src={img2} />
      </div>
      <div className={ss("con3Wrap")}>
      <img src={img4} />
      </div>
    </div>
  );
};

export default AboutUs;
