import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./styles/Detail.module.css";
import classNames from "classnames/bind";
import { BiCaretUp,BiCaretDown } from "react-icons/bi";


const ss = classNames.bind(styles);

const FiatDetail = () => {
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const prodcutPrice = 42000;
  const number = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


  const getProductDetail = async () => {
    let url1 = `https://my-json-server.typicode.com/YunTaeKyun93/Majanisite/fiat/${id}`;
    let res = await fetch(url1);
    let data = await res.json();
    console.log(data);
    setProduct(data);
    console.log(product.id);
  };

  const minus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const plus = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    getProductDetail();
  }, []);
  const calculatePrice = () => {
    const total = prodcutPrice * quantity;
    setPrice(total);
  };
  useEffect(() => {
    calculatePrice();
  }, [quantity]);

  return (
    <div className={ss("detailWrap")}>
      <div className={ss("detailImgWrap")}>
        <img src={product?.url} />
      </div>
      <div className={ss("detailContentWrap")}>
        <h5 className={ss("productTitle")}>제품명 : {product?.title}</h5>
        <p className={ss("productengTitle")}>({product?.engTitle})</p>
        <p className={ss("productPrice")}>판매가 : {product?.price}</p>
        <p className={ss("productSubitle")}>제품설명 : {product?.subTitle}</p>
        <p className={ss("productSubitle")}>배송방법 : 택배</p>
        <p className={ss("productSubitle")}>
          배송비 : 3000원 (100,000원 이상 구매시 무료)
        </p>
        <div className={ss("btnAndPrice")}>
          <p className={ss("productTitle2")}>{product?.title}</p>
          <button onClick={minus} className={ss("productMinus")}>
          <BiCaretDown/>
          </button>
          <div className={ss("quantityProduct")}> {quantity}</div>
          <button onClick={plus} className={ss("productPlus")}>
           <BiCaretUp/>
          </button>
          <p className={ss("productSum")}>{number} 원</p>
        </div>

        <div className={ss("hr")}></div>
        <div className={ss("TotalPrice")}>
          Total Price(수량): {number}원({quantity} 개)
        </div>
      </div>
    </div>
  );
};

export default FiatDetail;
