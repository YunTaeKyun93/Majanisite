import React from "react";
import { useNavigate } from "react-router-dom";
import  styled from 'styled-components';
import styles from "./styles/Fiat.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);


const FiatProductCard = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/fiat/${item.id}`);
  }
  return (
    <div  className={ss("productCard")} key={item?.id} onClick={showDetail} >
      <img src={item?.url} width="250px" className={ss("productCardImg")} />
      <h5>{item?.title}</h5>
      <div>{item?.engTitle}</div>
      <div>{item?.price}</div>
    </div>
  );
};


const ProductCardWrap = styled.div`
width: 100%;
background-color: red;
display: flex;
justify-content: center;
`
export default FiatProductCard;
