import React from "react";
import classNames from "classnames/bind";
import styles from './styles/MajaniTop3.module.css';
const ss = classNames.bind(styles);

const MajaniTopFiat = () => {
  return (
    <div className={ss("majaniTopContent")}>
   Fiat
    </div>
  );
};

export default MajaniTopFiat;
