import React, { useEffect, useState } from "react";
import FiatProductCard from "./FiatProductCard";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./styles/Fiat.module.css";
import BackImg from "./fiatImg/fiatback.PNG";
import FiatLogo from "./fiatImg/FIatLogo.png";
import FiatImg1 from "./fiatImg/creminoflat-image-1-1.png";
import FiatImg2 from "./fiatImg/fiatMark.PNG";
import { Fade, Flip } from "react-reveal";
import Logo from './historyImg/logo1.png';
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
// let url = `http://localhost:5000/fiat`;
// json-server --watch db.json --port 5000
const ss = classNames.bind(styles);
const Fiat = () => {
  const [productList, setProductList] = useState([]);
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/YunTaeKyun93/Majanisite/fiat `
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setProductList(data);
  };
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <div className={ss("productWrap")}>
        <img src={BackImg} alt="backgroundImg" className={ss("backGroundImg")} />
        <Link to="/" className={ss("logo")}>
          <img src={Logo} alt="Logo" width={"30%"} />
        </Link>
        <div className={ss("logoWrap")}>
          <img src={FiatLogo} alt="logo" width={"20%"} />
          <p className={ss("logoExp")}>1911년에 발명된 최초의 Cremino</p>
        </div>
        <div className={ss("contentWrap")}>
          <Fade delay={300} right>
            <div className={ss("con1")}>
              <div className={ss("Exp1")}>
                <h2>CreminoFiat(크리미노피아트)</h2>
                <h3>숭고한 크림</h3>
                <p>최초이자 오리지널 4겹의 크리미노피아트</p>
              </div>
              <img src={FiatImg1} alt="fiatCremino"  />
            </div>
          </Fade>
          <Fade right delay={300} left>
            <div className={ss("con2")}>
              <img src={FiatImg2} alt="logo" />
              <div className={ss("Exp2")}>
                <h3>100년 이상의 전통의 취미 </h3>
                <p>
                  피아트 크리모는 FIAT Top4 모델의 출시를 축하하기 위해 4겹의
                  즐거움을 선사하기 위해 만들어 졌으며, 1911년 Majani는 Turin
                  쇼콜라티에의 경쟁을 이기고 이 혁신적인 제품으로 자동차
                  제조업체가 요청한 입찰에서 승리했습니다. 1913년부터 Majani는
                  제품을 독점적으로 판매하기 시작했고 나중에 제과부문에서 브랜드
                  특허를 받았습니다.
                </p>
              </div>
            </div>
          </Fade>
          <div  className={ss("con3")}>
          {productList.map((product, index) => (
                <div key={index}>
                  <FiatProductCard item={product} />
                </div>
                   ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Fiat;
