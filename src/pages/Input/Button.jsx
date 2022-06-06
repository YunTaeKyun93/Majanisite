import styled from "styled-components";
import React from "react";
import { Button, Form } from "react-bootstrap";
import classNames from "classnames/bind";
import styles from "../styles/Login.module.css";

const ss = classNames.bind(styles);

export default function Button1({ content}) {
  const loginUser = (e) => {
    e.preventDefault();
    console.log("login");
  };
  return (
    <div>
      <Form onSubmit={(e) => loginUser(e)}>
        <Button type="submit" className={ss("submitBtn")}>
          {content}
        </Button>
      </Form>
    </div>
  );
}
// const StyledButton = styled.button`
//   background: linear-gradient(to right, #14163c 0%, #03217b 79%);
//   text-transform: uppercase;
//   letter-spacing: 0.2rem;
//   width: 300px;
//   height: 3rem;
//   border: none;
//   border-radius: 2rem;
//   cursor: pointer;
//   color: #ffffff;
// `;
