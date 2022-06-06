import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Snap from './productSliderImg/snap.png';
import Bricks from './productSliderImg/bricks.png';
import Cinquino from './productSliderImg/cinquino.png';
import Maracaibo from './productSliderImg/cremino.png';
import Fiat from './productSliderImg/fiat.png';
import Tortellino from './productSliderImg/tortellino.png';

export default class ProuductSlide extends Component {
  render() {
    const settings = {
      dots: false, //이미지순서를 알려줌
      infinite: true, // loop 사용유뮤
      speed: 1000, // 지나가는 속도
      autoplay: true, // 자동 실행 유뮤
      autoplaySpeed: 700, // 자동실행되는 속도
      slidesToShow: 4, //  한번에 보여줄 슬라이드쇼의 갯수
      slidesToScroll: 1, //  슬라이드로 넘김 갯수
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={Snap} alt="main1" width="100%" />
            
          </div>
          <div>
            <img src={Cinquino} alt="main2" width="100%" />
          </div>
          <div>
            <img src={Maracaibo} alt="main3" width="100%"  />
          </div>
          <div>
            <img src={Fiat} alt="main4" width="100%" />
          </div>
          <div>
            <img src={Tortellino} alt="main4" width="100%" />
          </div>
          <div>
            <img src={Bricks} alt="main4" width="100%" />
          </div>

        </Slider>
      
      </div>
    );
  }
}
