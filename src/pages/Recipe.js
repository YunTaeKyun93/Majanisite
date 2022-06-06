import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RecipeData } from "./recipeData";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import styled from "styled-components";
import Recipe1 from "./Recipe1";
import Recipe2 from "./Recipe2";
import Recipe3 from "./Recipe3";
import Recipe4 from "./Recipe4";
import { Zoom } from "react-reveal";

const ss = classNames.bind(styles);

const Recipe = () => {
  const [productList, setProductList] = useState([]);

  const showComponent = (e) => {
    const { name } = e.target;
    console.log(name);
    setProductList(name);
  };
  const selectComponent = {
    first: <Recipe1 />,
    second: <Recipe2 />,
    third: <Recipe3 />,
    fourth: <Recipe4 />,
  };
  return (
    <div className={ss("wrapper")}>
      <div className={ss("recipeCardContainer")}>
        {RecipeData.map((item) => (
          <RecipeCard className={ss("recipeCardWrap")}>
            <img
              src={item?.url}
              width="150px"
              name={item.name}
              onClick={showComponent}
            />
            <div className={ss("recipeTitle")}>{item?.title}</div>
            <div className={ss("recipeTitle")}>{item?.subTitle}</div>
          </RecipeCard>
        ))}
      </div>
      {productList && <div>{selectComponent[productList]}</div>}
    </div>
  );
};

export default Recipe;

const RecipeCard = styled.div`
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
