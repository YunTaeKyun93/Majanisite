import React, { useEffect, useState } from "react";
import styles from "./styles/Tortellini.module.css";
import BackImg from "./tortelliniImg/tortelliniBack.png";
import TortelliniProductCard from "./TortelliniProductCard";
import TortelliniLogo from "./tortelliniImg/tortelliniLogo.png";
import TortelliniImg1 from "./tortelliniImg/titolo.png";
import TortelliniImg2 from "./tortelliniImg/tortelliniImage.png";
import { Fade, Flip } from "react-reveal";
import Logo from "./historyImg/logo1.png";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import TortelliniDetail from "./TortelliniDetail";

const ss = classNames.bind(styles);
const Tortellini = () => {
  const [productList, setProductList] = useState([]);


  const getProduct = async () => {
    let url = `https://my-json-server.typicode.com/YunTaeKyun93/Majanisite/tortellini`;
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
          className={ss("backgroundImg")}
        />
        <Link to="/" className={ss("logo")}>
          <img src={Logo} alt="Logo"width={"30%"} />
        </Link>
        <div className={ss("logoWrap")}>
          <img src={TortelliniLogo} alt="logo" width={"40%"}/>

          <p className={ss("logoExp")}>
            볼로냐의 명물 토르텔리니, 초콜릿으로 재해석
          </p>
        </div>
        <div className={ss("contentWrap")}>
          <Fade delay={300} right>
            <div className={ss("con1")}>
              <div className={ss("Exp1")}>
                <h2>Tortellini(토르텔리니)</h2>
                <h3>초콜릿으로 다시 태어난 비너스의 배꼽</h3>
                <p>견고한 초콜릿 쉘 안에 녹아 있는 부드러운 크림의 조화</p>
              </div>
              <img src={TortelliniImg1} alt="fiatCremino" width="400px" />
            </div>
          </Fade>
          <Fade right delay={300} left>
            <div className={ss("con2")}>
              <img src={TortelliniImg2} alt="logo" />
              <div className={ss("Exp2")}>
                <h3>
                  볼로냐를 대표함과 동시에
                  <br /> 전 세계 미식가들에게 사랑 받을 수 있는 초콜릿{" "}
                </h3>
                <p>
                  마야니는 1796년 볼로냐에서 태어났습니다. 당시 이탈리아에선
                  처음으로 전문 제조시설을 갖춘 초콜릿 공방의 탄생이었습니다.
                  이후 품질과 맛에 유독 까다로운 왕족, 성직자 등 귀족들을
                  중심으로 초콜릿을 납품하면서 '고메 초콜릿의' 대명사로 그
                  명성을 쌓아왔습니다. <br />
                  이와 같이 설립 후 200년동안 볼로냐를 대표하며 많은 사랑을
                  받아온 마야니는 그들의 고향인 '볼로냐'에게 무엇인가 특별한
                  선물을 해주고 싶다는 생각을 하게 되었고, 볼로냐를 대표하는
                  음식 토르텔리니를 초콜릿을 재해석하여 마야니의 토르텔리니가
                  세상에 나오게 되었고, 스코르자, 피아트에 이어 마야니를
                  대표하는 3대 초콜릿이 되었습니다.
                </p>
              </div>
            </div>
          </Fade>
          <div className={ss("con3")}>
            {productList.map((product, index) => (
              <div key={index}>
                <TortelliniProductCard item={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tortellini;
