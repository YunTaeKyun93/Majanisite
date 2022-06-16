import React, { Component } from "react";
import { useMediaQuery } from 'react-responsive'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardImg,
} from "reactstrap";
import step1 from "./manufactureImg/1-1.png";
import step2 from "./manufactureImg/2-1.png";
import step3 from "./manufactureImg/3-1.png";
import step4 from "./manufactureImg/4-1.png";
import step5 from "./manufactureImg/5-1.png";
import step6 from "./manufactureImg/6-1.png";
import step7 from "./manufactureImg/7-1.png";
import step8 from "./manufactureImg/8-1.png";
import step9 from "./manufactureImg/9-1.png";
import styled from "styled-components";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 991 })
  return isDesktop ? children : null
}
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 990 })
  return isMobile ? children : null
}



const Manufacture = () => {
  const settings = {
    dots: true, //이미지순서를 알려줌
    infinite: true, // loop 사용유뮤
    speed: 1000, // 지나가는 속도
    autoplay: true, // 자동 실행 유뮤
    autoplaySpeed: 700, // 자동실행되는 속도
    slidesToShow: 4, //  한번에 보여줄 슬라이드쇼의 갯수
    slidesToScroll: 1, //  슬라이드로 넘김 갯수
  };
  const settingsM = {
    dots: true, //이미지순서를 알려줌
    infinite: true, // loop 사용유뮤
    speed: 1500, // 지나가는 속도
    autoplay: true, // 자동 실행 유뮤
    autoplaySpeed: 1500, // 자동실행되는 속도
    slidesToShow: 2, //  한번에 보여줄 슬라이드쇼의 갯수
    slidesToScroll: 1, //  슬라이드로 넘김 갯수
  };

  const Wrap = styled.div`
    margin-top: 150px;
  `;
  return (
    <>
    <Desktop>
      <Wrap>
        <Slider {...settings}>
          <Card>
            <CardTitle>
              <h5>Phase 1</h5>
            </CardTitle>
            <CardSubtitle>세척 및 보관</CardSubtitle>
            <CardImg width="100%" src={step1} alt="step1" />
            <CardBody>
              <CardText>
                세척과정을 통해 카카오의 불순물을 제거한 후 적절한 온도와
                습기환경에서 보관합니다.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <h5>Phase 2</h5>
            </CardTitle>
            <CardSubtitle>카카오 로스팅</CardSubtitle>
            <CardImg width="100%" src={step2} alt="step2" />
            <CardBody>
              <CardText>
                마야니만의 오랜 전통과 경험에서 나오는 특별한 로스팅을 통해
                다양하고 독특한 향을 낼 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 3</h5>
            </CardTitle>
            <CardSubtitle>카카오 페이스트</CardSubtitle>
            <CardImg width="100%" src={step3} alt="step3" />
            <CardBody>
              <CardText>
                껍질이 제거되고 초콜릿의 주 원료가 되는 카카오 페이스트를 추출
                할 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 4</h5>
            </CardTitle>
            <CardSubtitle>카카오 버터추출</CardSubtitle>
            <CardImg width="100%" src={step4} alt="step4" />
            <CardBody>
              <CardText>
                카카오 페이스트를 고압으로 눌러 카카오 버터를 추출합니다. 카카오
                버터는 굳거나 녹는 특성만 있어 37도를 기준으로 그 이상이면 액체
                상태, 그이하면 고체 상태가 됩니다
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 5</h5>
            </CardTitle>
            <CardSubtitle>카카오 버터추출</CardSubtitle>
            <CardImg width="100%" src={step5} alt="step5" />
            <CardBody>
              <CardText>
                기름 성분인 카카오 버터와 건조 성분인 카카오 케이크가 남게
                되는데, 마야니의 레시피를 통해 여러가지 맛을 첨가할 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 6</h5>
            </CardTitle>
            <CardSubtitle>템퍼링(Tempering) 작업</CardSubtitle>
            <CardImg width="100%" src={step6} alt="step7" />
            <CardBody>
              <CardText>
                {" "}
                초콜릿을 녹이면 카카오 버터가 결정구조가 변화하므로 초콜릿의
                품질에 가장 적합한 결정형을 만들어 굳히기 위해 실시하는
                작업입니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 7</h5>
            </CardTitle>
            <CardSubtitle>콘칭(Conching) 작업</CardSubtitle>
            <CardImg width="100%" src={step7} alt="step7" />
            <CardBody>
              <CardText>
                콘칭은 초콜릿의 풍미를 회복시키는 중요한 작업입니다. 초콜릿의
                종류에 따라 일정한 온도와 휘젓기를 반복합니다. 초콜릿의 광택증가
                풍미개선의 효과가 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle><h5>Phase 8</h5></CardTitle>
            <CardSubtitle>적정 온도</CardSubtitle>
            <CardImg width="100%" src={step8} alt="step8" />
            <CardBody>
              <CardText>
                콘칭이 끝난 액체 초콜릿을 안정된 고체상의 지방으로 유도하기 위해
                온도 조절 작업을 하게 됩니다. 그 결과로 보형의 안정성, 초콜릿의
                광택 증가 등을 유지 시킬 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle><h5>Phase 9</h5></CardTitle>
            <CardSubtitle>적정 온도</CardSubtitle>
            <CardImg width="100%" src={step9} alt="step9" />
            <CardBody>
              <CardText>
                이렇게 정제된 초콜릿은 마야니만의 고유한 모양을 가질 수 있는
                특수 주형에 부어집니다. 전용라인에서 각각의 모양과 맛이 첨가되어
                마야니의 초콜릿이 완성됩니다.
              </CardText>
            </CardBody>
          </Card>
        </Slider>
      </Wrap>
    </Desktop>





    <Mobile>
      <Wrap>
        <Slider {...settingsM}>
          <Card>
            <CardTitle>
              <h5>Phase 1</h5>
            </CardTitle>
            <CardSubtitle>세척 및 보관</CardSubtitle>
            <CardImg width="50%" src={step1} alt="step1" />
            <CardBody>
              <CardText>
                세척과정을 통해 카카오의 불순물을 제거한 후 적절한 온도와
                습기환경에서 보관합니다.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardTitle>
              <h5>Phase 2</h5>
            </CardTitle>
            <CardSubtitle>카카오 로스팅</CardSubtitle>
            <CardImg width="50%" src={step2} alt="step2" />
            <CardBody>
              <CardText>
                마야니만의 오랜 전통과 경험에서 나오는 특별한 로스팅을 통해
                다양하고 독특한 향을 낼 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 3</h5>
            </CardTitle>
            <CardSubtitle>카카오 페이스트</CardSubtitle>
            <CardImg width="50%" src={step3} alt="step3" />
            <CardBody>
              <CardText>
                껍질이 제거되고 초콜릿의 주 원료가 되는 카카오 페이스트를 추출
                할 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 4</h5>
            </CardTitle>
            <CardSubtitle>카카오 버터추출</CardSubtitle>
            <CardImg width="50%" src={step4} alt="step4" />
            <CardBody>
              <CardText>
                카카오 페이스트를 고압으로 눌러 카카오 버터를 추출합니다. 카카오
                버터는 굳거나 녹는 특성만 있어 37도를 기준으로 그 이상이면 액체
                상태, 그이하면 고체 상태가 됩니다
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 5</h5>
            </CardTitle>
            <CardSubtitle>카카오 버터추출</CardSubtitle>
            <CardImg width="50%" src={step5} alt="step5" />
            <CardBody>
              <CardText>
                기름 성분인 카카오 버터와 건조 성분인 카카오 케이크가 남게
                되는데, 마야니의 레시피를 통해 여러가지 맛을 첨가할 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 6</h5>
            </CardTitle>
            <CardSubtitle>템퍼링(Tempering) 작업</CardSubtitle>
            <CardImg width="50%" src={step6} alt="step6" />
            <CardBody>
              <CardText>
                {" "}
                초콜릿을 녹이면 카카오 버터가 결정구조가 변화하므로 초콜릿의
                품질에 가장 적합한 결정형을 만들어 굳히기 위해 실시하는
                작업입니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle>
              <h5>Phase 7</h5>
            </CardTitle>
            <CardSubtitle>콘칭(Conching) 작업</CardSubtitle>
            <CardImg width="50%" src={step7} alt="step7" />
            <CardBody>
              <CardText>
                콘칭은 초콜릿의 풍미를 회복시키는 중요한 작업입니다. 초콜릿의
                종류에 따라 일정한 온도와 휘젓기를 반복합니다. 초콜릿의 광택증가
                풍미개선의 효과가 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle><h5>Phase 8</h5></CardTitle>
            <CardSubtitle>적정 온도</CardSubtitle>
            <CardImg width="50%" src={step8} alt="step8" />
            <CardBody>
              <CardText>
                콘칭이 끝난 액체 초콜릿을 안정된 고체상의 지방으로 유도하기 위해
                온도 조절 작업을 하게 됩니다. 그 결과로 보형의 안정성, 초콜릿의
                광택 증가 등을 유지 시킬 수 있습니다.
              </CardText>
            </CardBody>
          </Card>

          <Card>
            <CardTitle><h5>Phase 9</h5></CardTitle>
            <CardSubtitle>적정 온도</CardSubtitle>
            <CardImg width="50%" src={step9} alt="step9" />
            <CardBody>
              <CardText>
                이렇게 정제된 초콜릿은 마야니만의 고유한 모양을 가질 수 있는
                특수 주형에 부어집니다. 전용라인에서 각각의 모양과 맛이 첨가되어
                마야니의 초콜릿이 완성됩니다.
              </CardText>
            </CardBody>
          </Card>
        </Slider>
      </Wrap>
 
    </Mobile>
    </>
  );
};

export default Manufacture;

