import React from "react";
import styles from "./styles/Login.module.css";
import styled from "styled-components";
import Input from "./Input/Input";
import { Button, Form } from "react-bootstrap";
// import Button from "./Input/Button";
import Icon from "./Input/Icon";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
const ss = classNames.bind(styles);

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login");
    setAuthenticate(true);
    navigate('/')
  };
  const FaceBookBackground =
    "linear-gradient(to right, #0546A0 0%, #663FB6 100%)";
  const InstaBackground =
    "linear-gradient(to right, #A12AC4 0%, #ED586C 40%, #F0A853 100%)";
  const TwitterBackground =
    "linear-gradient(to right, #56C1E1 0%, #35A9CE 50%)";
  return (
    <div className={ss("wrap")}>
      <MainContainer>
        <h2 className={ss("welcomeText")}>Welcome!</h2>
        <div className={ss("inputContainer")}>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
        </div>
        <Form onSubmit={(e) => loginUser(e)}  className={ss("buttonContainer")} >
          <Button type="submit" className={ss("submitBtn")}>
            Sign In
          </Button>
        </Form>
      
        <h5 className={ss("loginWith")}>or Login With</h5>
        <div className={ss("horizontalRule")}></div>
        <div className={ss("iconsContainer")}>
          <Icon color={FaceBookBackground}>
            <FaFacebookF />
          </Icon>
          <Icon color={InstaBackground}>
            <FaInstagram />
          </Icon>
          <Icon color={TwitterBackground}>
            <FaTwitter />
          </Icon>
        </div>
        <h4 className={ss("forgotPassword")}>Forgot Password?</h4>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  width: 30vw;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.4rem;
  @media only screen and (min-width: 320px) {
    width: 80vw;
    height: 90vh;
    hr {
      margin-bottom: 0.3rem;
    }
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 360px) {
    width: 80vw;
    height: 90vh;
    h4 {
      font-size: small;
    }
  }
  @media only screen and (min-width: 411px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 768px) {
    width: 80vw;
    height: 90vh;
  }
  @media only screen and (min-width: 1024px) {
    width: 70vw;
    height: 80vh;
  }
  @media only screen and (min-width: 1280px) {
    width: 30vw;
    height: 80vh;
  }
`;

export default Login;
