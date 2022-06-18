import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/MajaniTop3.module.css";
import classNames from "classnames/bind";
import img1 from "./mainImg/majani2.png";
import logo from "./mainImg/scrozaLogo.png";


const ss = classNames.bind(styles);

const MajaniTopScorza = () => {
  const navigate = useNavigate();
  const toScorza = () => {
    navigate("/scorza");
  };
  return (
    <div className={ss("majaniTopContent")}>
      <img src={img1} onClick={toScorza} />
      <div className={ss("logo2")}>
        <img src={logo} onClick={toScorza} />
      </div>
    </div>
  );
};

export default MajaniTopScorza;
