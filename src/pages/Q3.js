import React from "react";
import styles from "./styles/Question.module.css";
import img1 from "./QustionImg/3-1.PNG";
import img2 from "./QustionImg/3-2.PNG";
import img3 from "./QustionImg/3-3.PNG";
import img4 from "./QustionImg/3-4.PNG";
import  classNames from 'classnames/bind';
import { Fade, Zoom } from "react-reveal";

const ss = classNames.bind(styles);

const Third = () => {
  return (
    <Fade>
      <div className={ss('third_wrap')}>
        <img src={img4} alt="" />
        <img src={img1} alt="" className={ss('third_img1')}/>
        <Zoom>
        <br/>
          <img src={img2} alt="" className={ss('third_img2')}/>
          <img src={img3} alt="" />
        </Zoom>
      </div>
    </Fade>
  );
};

export default Third;
