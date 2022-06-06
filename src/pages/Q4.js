import React from 'react'
import img1 from './QustionImg/4-1.PNG';
import { Link } from 'react-router-dom';
import { Fade } from 'react-reveal';
import styles from "./styles/Question.module.css";
import classNames from 'classnames/bind';
const ss = classNames.bind(styles)

const Fourth = () => {
  return (
    <Fade>
    <div className={ss('fourth_wrap')}>
      <img src={img1} alt="" >   
      </img>
      <button className={ss('btn','fourth_linkBtn')}>
      <Link to='AboutUs' className={ss('fourth_link')}>About Us</Link>
      </button>
      
    </div>
    </Fade>
  )
}

export default Fourth