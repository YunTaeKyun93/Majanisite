import React from "react";
import MainImg from "./MainImg.js";
import Question from "./Question";
import ProuductSlide from "./ProductSlide";
import Ad from "./Ad";
import { Zoom, Fade } from "react-reveal";
import MajaniTop3 from "./MajaniTop3";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <MainImg />
      <Zoom>
        <Ad />
      </Zoom>
      <MajaniTop3 />
      <Margin />
      <Question />
      <ProuductSlide />
    </>
  );
}

const Margin = styled.div`
  height: 200px;
`;
