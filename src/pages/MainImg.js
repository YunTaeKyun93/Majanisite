import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import styles from "./styles/MainImg.module.css";
import classNames from "classnames/bind";
import MainImg1 from "./main/mainbn01_0114.jpg";
import MainImg2 from "./main/mainbn02_0114.jpg";
import MainImg3 from "./main/mainbn03_0114.jpg";
import MainImg4 from "./main/mainbn04_0114.jpg";




const ss = classNames.bind(styles);

export default class MainImge extends Component {
  render() {
    const settings = {
      dots: false, //이미지순서를 알려줌
      infinite: true, // loop 사용유뮤
      speed: 700, // 지나가는 속도
      autoplay: true, // 자동 실행 유뮤
      autoplaySpeed:5000, // 자동실행되는 속도
      slidesToShow: 1, //  한번에 보여줄 슬라이드쇼의 갯수
      slidesToScroll: 1, //  슬라이드로 넘김 갯수
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <div className={ss('imgWrap')}>
              <img src={MainImg1} alt="main1" width="100%" />
              <div className={ss('linkWrap')}>
                <button className={ss('btn','linkBtn1')}>
                  <Link to="/History" className={styles.link1}>
                  History
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.imgWrap}>
              <img src={MainImg3} alt="main3" width="100%" />
              <div  className={ss('linkWrap')}>
              <button className={ss('btn','linkBtn2')}>
                  <Link to="/Manufacture" className={styles.link2}>
                Manufacture
                  </Link>
                </button>
           
              </div>
            </div>
          </div>
          <div>
            <div className={styles.imgWrap}>
              <img src={MainImg2} alt="main2" width="100%" />
              <div  className={ss('linkWrap')}>
                <button className={ss('btn','linkBtn3')}>
                  <Link to="/AboutUs" className={styles.link3}>
                  AboutUs
                  </Link>
                </button>
           
              </div>
            </div>
          </div>
          <div>
            <div className={styles.imgWrap}>
              <img src={MainImg4} alt="main4" width="100%" />
              <div  className={ss('linkWrap')}>
              <button className={ss('btn','linkBtn4')}>
                  <Link to="/Recipe" className={styles.link4}>
                  Recipe
                  </Link>
                </button>
                
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
