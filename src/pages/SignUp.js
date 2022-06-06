import React from "react";
import classNames from "classnames/bind";
import styles from "./styles/SignUp.module.css";
import signImg from "./mainImg/banner.jpg";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaRegEnvelope,
  FaRegCaretSquareRight,
} from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
const ss = classNames.bind(styles);

const SignUp = () => {
  return (
    <div>
      <section className={ss("signup")}>
        <div className={ss("container")}>
          <div className={ss("signupContent")}>
      
            <div className={ss("signupForm")}>
              <h2 className={ss("formTitle")}>Sign Up</h2>
              <form className={ss("registerForm")}>
                <div className={ss("formGroup")}>
                  <label htmlFor="name">
                    <FaUserAlt className={ss('formIcon')} />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeholder="Your Name"
                    />
                  </label>
                </div>
                <div className={ss("formGroup")}>
                  <label htmlFor="email">
                    <FaRegEnvelope className={ss('formIcon')} />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Your Email"
                    />
                  </label>
                </div>
                <div className={ss("formGroup")}>
                  <label htmlFor="phone">
                    <FaPhoneAlt  className={ss('formIcon')}/>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="Your Phone"
                    />
                  </label>
                </div>
                <div className={ss("formGroup")}>
                  <label htmlFor="work">
                    <FaRegCaretSquareRight className={ss('formIcon')} />
                    <input
                      type="text"
                      name="work"
                      id="work"
                      autoComplete="off"
                      placeholder="Your Profession"
                    />
                  </label>
                </div>
                <div className={ss("formGroup")}>
                  <label htmlFor="password">
                    <HiOutlineLockClosed className={ss('formIcon')} />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Your Password"
                    />
                  </label>
                </div>
                <div className={ss("formGroup")}>
                  <label htmlFor="cpassword">
                    <HiOutlineLockClosed className={ss('formIcon')} />
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      autoComplete="off"
                      placeholder="Your Confirm Password"
                    />
                  </label>
                </div>
                <div className={ss("formBtn")}>
                  <input
                    type="submit"
                    name="signup"
                    id="sighnup"
                    className={ss("formSubmit")}
                    value="register"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
