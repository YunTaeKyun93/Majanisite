import React from "react";
import styled from "styled-components";
import AboutUs from './AboutUs';

const FooterWrap = styled.div`
  width: 100%;
  height: 15vh;
  border: 1px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'HallymGothic-Regular';
  font-size: 0.8vw;
`;
const Warning = styled.div`
margin-top: 2vh;
font-size: 0.6vw;
`;

const Hr = styled.div`
width: 100vw;
height: 2px;
background-color: #ccc;
`

const Footer = () => {
  return( 
    <>
    <Hr/>
  <FooterWrap>
    <div>COMPANY Majani 대표자 윤태균 <span> </span> E-mail ytk5495@naver.com</div>
    <div>ADDRESS 부산광역시 수영로 267번길 47</div>
    <div>Copyright 마야니 초콜릿 All right reserved</div>
    <div>Phone 010 5594 4641</div>
    <Warning>고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 PG사의 구매안전서비스를 이용하실 수 있습니다.</Warning>
    
  </FooterWrap>
  </>
  )
};

export default Footer;
