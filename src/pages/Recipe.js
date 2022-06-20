import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive'
import { RecipeData } from "./recipeData";
import classNames from "classnames/bind";
import styles from "./styles/Recipe.module.css";
import styled from "styled-components";
import Recipe1 from "./Recipe1";
import Recipe2 from "./Recipe2";
import Recipe3 from "./Recipe3";
import { Zoom } from "react-reveal";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 991 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 641, maxWidth: 990 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 })
  return isMobile ? children : null
}

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
  };
  return (
    <>
    <Desktop>
    <div className={ss("wrapper")}>
      <div className={ss("recipeCardContainer")}>
        {RecipeData.map((item) => (
          <RecipeCard className={ss("recipeCardWrap")}>
            <img
              src={item?.url}
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
    </Desktop>

        <Tablet>
        <div className={ss("wrapper")}>
          <div className={ss("recipeCardContainer")}>
            {RecipeData.map((item) => (
              <RecipeCard className={ss("recipeCardWrap")}>
                <img
                  src={item?.url}
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
        </Tablet>

        <Mobile>
        <div className={ss("wrapper")}>
          <div className={ss("recipeCardContainer")}>
            {RecipeData.map((item) => (
              <RecipeCard className={ss("recipeCardWrap")}>
                <img
                  src={item?.url}
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
        </Mobile>
        </>
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
