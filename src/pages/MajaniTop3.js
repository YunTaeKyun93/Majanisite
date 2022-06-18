import { React, useState, useEffect } from "react";
import styles from "./styles/MajaniTop3.module.css";
import { Fade, Slide } from "react-reveal";
import classNames from "classnames/bind";
import IMAGES from "./Top3Data.json";
import MajaniTopFiat from "./MajaniTopFiat";
import MajaniTopScorza from "./MajaniTopScorza";
import MajaniTopTortellini from "./MajaniTopTortellini";
import styled from "styled-components";

const ss = classNames.bind(styles);

const MajaniTop3 = () => {
  const [content, setContent] = useState();


  const selectComponent = {
    Fiat: <MajaniTopFiat />,
    Scorza: <MajaniTopScorza />,
    Tortellini: <MajaniTopTortellini />,
  };

  const showComponent = (e) => {
    const { name } = e.target;
    setContent(name);
  };
  const removeComponent = () => {

  };

  return (
    <div className={ss("top3_Wrap")}>
      <div className={ss("top3_Header")}>Majani Top 3 Chocolate</div>
      <div className={ss("top3_content")}>
        {IMAGES.map((item) => (
          <div
            key={item.id}
            className={ss("top3_show")}
            name={item.name}
            onClick={showComponent}
          >
            <div className={ss("top3_img")}>
              <img src={item.url} alt="#" name={item.name} />
              <div className={ss("top3_title")}>{item.name}</div>
            </div>
          </div>
        ))}
      </div>
      {content && <div>{selectComponent[content]}</div>}

    </div>
  );
};

export default MajaniTop3;


