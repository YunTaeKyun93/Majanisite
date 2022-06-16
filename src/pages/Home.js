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
    <Wrap>
      <MainImg />
      <Zoom>
        <Ad />
      </Zoom>
      <MajaniTop3 />
      <Question />
      <ProuductSlide />
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
