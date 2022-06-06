import React from "react";

import  styled from 'styled-components';
import styles from "./styles/Scorza.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);
const ProductCardWrap = styled.div`
width: 100%;
background-color: red;
display: flex;
justify-content: center;
`

const ScorzaProductCard = ({item,index}) => {
  return (
    <div  className={ss("productCard")} >
      <img src={item?.url} width="250px"  className={ss("productCardImg")} />
      <h5>{item?.title}</h5>
      <div>{item?.engTitle}</div>
      <div>{item?.price}</div>
    </div>
  );
};

export default ScorzaProductCard;
