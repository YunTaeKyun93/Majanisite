import React from "react";
import styles from "./styles/Question.module.css";
import img1 from "./QustionImg/1-2.PNG";
import img2 from "./QustionImg/1-1.PNG";
import img3 from "./QustionImg/1-4.PNG";
import { Zoom, Fade } from "react-reveal";
import classNames from "classnames/bind";
const ss = classNames.bind(styles);
const First = () => {
  return (
    <div className={ss("first_wrap")}>
      <Fade>
        <div>
          <img src={img2} alt="Explanation1"  className={ss("img1")} />
        </div>
        <div className={ss("content1")}>
          <img src={img1} alt="Explanation2"  className={ss("img2")} />
          <img src={img3} alt="Explanation3"  className={ss("img3")} />
        </div>
      </Fade>
    </div>
  );
};

export default First;
