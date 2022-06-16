import React from "react";
import { useNavigate } from "react-router-dom";
import  styled from 'styled-components';
import styles from "./styles/Fiat.module.css";
import classNames from "classnames/bind";

const ss = classNames.bind(styles);
const ProductCardWrap = styled.div`
width: 100%;
background-color: red;
display: flex;
justify-content: center;
`

const TortelliniProductCard = ({item,index}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/tortellini/${item.id}`);
  }
  return (
    <div  className={ss("productCard")} key={item?.id} onClick={showDetail} >
      <img src={item?.url} className={ss("productCardImg")} />
      <h5>{item?.title}</h5>
      <p>{item?.engTitle}</p>
      <p>{item?.price}</p>
    </div>
  );
};

export default TortelliniProductCard;
