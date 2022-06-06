import React, { useState } from "react";
import styled from "styled-components";
import { QuestionData } from "./QuestionData";
import Q1 from "./Q1";
import Q2 from "./Q2";
import Q3 from "./Q3";
import Q4 from "./Q4";
import styles from "./styles/Question.module.css";
import classNames from 'classnames/bind';


const ss = classNames.bind(styles)

const Question = () => {
  const [content, setContent] = useState();

  const buttonValueSetting = (e) => {
    const { name } = e.target;
    console.log(name)
    setContent(name);
  };

const buttonValueReset =()=>{
  setContent('')
}

  const selectComponent = {
    first: <Q1 />,
    second: <Q2 />,
    third: <Q3 />,
    fourth: <Q4 />,
  };

  return (
    <div>
      <div className={ss('buttonWrap')}>
        <h1>Qusetion About Majani</h1>

        {QuestionData.map((data) => {
          return (
            <div>
              <Button
                onClick={buttonValueSetting}
                onDoubleClick={buttonValueReset}
                name={data.name}
                key={data.id}
              >
                {data.text}
              </Button>
            </div>
          );
        })}
      </div>
      {content && <div>{selectComponent[content]}</div>}
    </div>
  );
};

export default Question;

const Button = styled.button`
  width: 1900px;
  padding: 1rem 2rem;
  color: #fff;
  background: #0f2027;
  background: -webkit-linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  border: 1px solid white;
`;
