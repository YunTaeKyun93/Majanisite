import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles/MajaniTop3.module.css";
import classNames from "classnames/bind";
import img1 from "./mainImg/majani4.png";
import logo from "./mainImg/tortelliniLogo.png";

const ss = classNames.bind(styles);

const MajaniTopTortellini = () => {
  const navigate = useNavigate();
  const toTortellini = () => {
    navigate("/tortellini");
  };
  return (
    <div className={ss("majaniTopContent")}>
      <img src={img1} onClick={toTortellini} />
      <div className={ss("logo3")}>
        <img src={logo} onClick={toTortellini} />
      </div>
    </div>
  );
};

export default MajaniTopTortellini;
