import React, { useEffect, useRef, useState, useMemo } from "react";
import ScorzaProductCard from "./ScorzaProductCard";
import { Container, Col, Row } from "react-bootstrap";
import styles from "./styles/Scorza.module.css";
import BackImg from "./scrozaImg/majani2.png";
import ScrozaLogo from "./scrozaImg/scrozaLogo.png";
import ScorzaImg1 from "./scrozaImg/scorzaProduct1.jpg";
import ScorzaImg2 from "./scrozaImg/scorza.png";
import { Fade, Flip } from "react-reveal";
import Logo from "./historyImg/logo1.png";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import TortelliniDetail from "./TortelliniDetail";


const ss = classNames.bind(styles);
const Scorza = () => {
  const [productList, setProductList] = useState([]);
  const [closed, setClosed] = useState(false)

  const handleMoreBtn = ()=>{
    setClosed(!closed);
  }

    
  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/YunTaeKyun93/Majanisite/scorza`;
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
        <img
          src={BackImg}
          alt="backgroundImg"
          className={ss("backGroundImg")}
        />
        <Link to="/" className={ss("logo")}>
          <img src={Logo} alt="Logo" width={"30%"} />
        </Link>
        <div className={ss("logoWrap")}>
          <img src={ScrozaLogo} alt="logo" width={"40%"} />

          <p className={ss("logoExp")}>이탈리아 최초의 고형 초콜릿</p>
        </div>
        <div className={ss("contentWrap")}>
          <Fade delay={300} right>
            <div className={ss("con1")}>
              <div className={ss("Exp1")}>
                <h2>Scorza(스코르자)</h2>
                <h3>한 입 베어무는 순간 입 안에 펼쳐지는 달콤함</h3>
                <p>
                  오늘 날에도 타의 추종을 불허하는 이탈리아에서
                  <br />
                  생산되는 가장 오래된 고체 형태의 초콜릿
                  <br />
                  놀라운 질감과 독특한 맛을 즐겨보세요
                </p>
              </div>
              <img src={ScorzaImg1} alt="fiatCremino"  />
            </div>
          </Fade>
          <Fade right delay={300} left>
            <div className={ss("con2")}>
              <img src={ScorzaImg2} alt="logo"  />
              <div className={ss("Exp2")}>
                <h3>이탈리아 최초의 고형 초콜릿</h3>
                <p >
                  나무 껍질을 닮았다고 해서 1832년 탄생한 스코르자 초콜릿은
                  이탈리아 최초의 고체 초콜릿입니다. 그 전의 초콜릿은 고체가
                  아닌 마시는 음식이었습니다. Majani는 4가지 다른 카카오 품종을
                  블렌딩하여 얻은 제품에 독특한 특수가공 방식을 수 세대에 걸쳐
                  전수 해왔습니다.
                </p>
              </div>
            </div>
          </Fade>
          <div className={ss("con3")}>
            {productList.map((product, index) => (
              <div key={index}>
                <ScorzaProductCard item={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Scorza;
