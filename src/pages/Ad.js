import { React, useState, useEffect } from "react";
import styled from "styled-components";
import { Zoom } from 'react-reveal';
import ReactPlayer from 'react-player/lazy';
import main from './main/img_01.png';
// yarn add react-player
const VideoWrap = styled.div`
display: flex;
justify-content: center;
margin-top: 50px;
margin-bottom:200px;
`;

const Ad = ({ playList, index }) => {


  return (

    <VideoWrap>


      <ReactPlayer
        className='react-player'
        url={'https://player.vimeo.com/video/500265810'}    // 플레이어 url
        width='2000px'         // 플레이어 크기 (가로)
        height='1000px'        // 플레이어 크기 (세로)
        playing={true}        // 자동 재생 on
        muted={false}          // 음소거 on
        controls={true}       // 플레이어 컨트롤 노출 여부
        light={false}         // 플레이어 모드
        pip={true}            // pip 모드 설정 여부
        poster={main}   // 플레이어 초기 포스터 사진
        // 플레이어 끝났을 때 이벤트
      />

    </VideoWrap>

  );
};

export default Ad;
