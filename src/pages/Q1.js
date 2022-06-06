import React from "react";
import styles from "./styles/Question.module.css";
import img1 from "./QustionImg/1-1.PNG";
import img2 from "./QustionImg/1-2.PNG";
import img3 from "./QustionImg/1-3.PNG";
import img4 from "./QustionImg/1-4.PNG";
import { Zoom, Fade } from "react-reveal";
import classNames from 'classnames/bind';
const ss = classNames.bind(styles)
const First = () => {
  return (
    <div className={ss('first_wrap')}>
      <Fade>
        <div>
          <img src={img2} alt="Explanation1" />
        </div>
        <div>
          <img src={img1} alt="Explanation2" />
          <img src={img4} alt="Explanation4" />
        </div>
   
      </Fade>
    </div>
  );
};

export default First;
