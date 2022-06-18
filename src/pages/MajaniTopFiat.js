import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles/MajaniTop3.module.css";
import img1 from "./mainImg/majani1.png";
import logo from "./mainImg/FIatLogo.png";

const ss = classNames.bind(styles);

const MajaniTopFiat = () => {
  const navigate = useNavigate();
  const toFiat = () => {
    navigate("/fiat");
  };
  return (
    <div className={ss("majaniTopContent")}>
      <img src={img1} onClick={toFiat} />
      <div className={ss("logo1")}>
        <img src={logo} onClick={toFiat} />
      </div>
    </div>
  );
};

export default MajaniTopFiat;
