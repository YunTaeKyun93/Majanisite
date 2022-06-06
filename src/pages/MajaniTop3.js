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
    console.log(name);
    setContent(name);
  };
  const removeComponent = () => {
    setContent("");
  };

  return (
    <div className={ss("top3_Wrap")}>
      <div className={ss("top3_Header")}>Majani Top 3 Chocolate</div>
      <div className={ss("top3_content")}>
        {IMAGES.map((item) => (
          <Top3Show key={item.id} className={ss("top3_show")}>
            <img
              src={item.url}
              alt="#"
              className={ss("top3_img")}
              onMouseOver={showComponent}
              onMouseOut={removeComponent}
              name={item.name}
            />
          </Top3Show>
        ))}
      </div>
      {content && <div>{selectComponent[content]}</div>}
    </div>
  );
};

export default MajaniTop3;

const Top3Show = styled.div`
  width: 33%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
`;
