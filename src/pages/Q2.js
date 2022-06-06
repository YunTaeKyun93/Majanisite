import React from "react";
import styles from "./styles/Question.module.css";
import img1 from "./QustionImg/2-1.PNG";
import img2 from "./QustionImg/2-2.PNG";
import img3 from "./QustionImg/2-3.PNG";
import img4 from "./QustionImg/2-4.PNG";
import {Fade,Zoom} from 'react-reveal';
import  classNames from 'classnames/bind';
const ss = classNames.bind(styles);
const Second = () => {
  return (
  <Fade>
    <div className={ss('second_wrap')}>
      <img src={img1} alt="" className={ss('second_img1')}/>
      <img src={img2} alt="" className={ss('second_img2')}/>
      <img src={img3} alt="" />
      <Zoom>
      <img src={img4} alt="" />
      </Zoom>
    </div>
    </Fade>
  );
};

export default Second;

