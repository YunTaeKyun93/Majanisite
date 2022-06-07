import React from "react";
import styled from "styled-components";

const FooterWrap = styled.div`
  width: 100%;
  height: 200px;
  background-color: royalblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Footer = () => {
  return <FooterWrap>
    <div>COMPANY Majani 대표자 윤태균 E-mail ytk5495@naver.com</div>
    <div>ADDRESS 부산광역시 수영로 267번길 47</div>
  </FooterWrap>;
};

export default Footer;
