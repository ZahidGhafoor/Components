import React, { useState } from "react";
import { Link } from "react-router-dom";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";

import logo from "../React/titlelog.png";
import logo2 from "../React/google.png";
import "./Login.scss";

const Zahidfield = withStyles({
  root: {
    "& label": {
      color: "#747573",
    },
    width: "100%",
    marginBottom: "15px",

    "& label.Mui-focused": {
      color: "white",
      borderColor: "white",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      color: "white",
      "& .MuiOutlinedInput-input": {
        padding: "13.5px 12px",
      },

      "& fieldset": {
        borderColor: "rgba(8, 8, 8, 0.445)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(8, 8, 8, 0.445)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#f16219",
      },
    },
  },
})(TextField);

const Login = () => {
  const [Fullname, useFullNme] = useState({
    Email: "",
    Pass: "",
  });

  const InputEvent = (event) => {
    // console.log(event.target.value);

    const { value, name } = event.target;

    useFullNme((pValue) => {
      return {
        ...pValue,
        [name]: value,
      };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(
      "YOur Email is =",
      Fullname.Email,
      "Your Password is =",
      Fullname.Pass
    );
    alert("Login Form Submitted Succesfully");
  };

  return (
    <>
      <form autoComplete="off" onSubmit={onSubmit}>
        <div className="main_container">
          <div className="centrel_div">
            <div className="img">
              <img className="logo_img" src={logo} alt="Error" />
            </div>
            <div className="button">
              <img src={logo2} alt="Error" className="google_img" />
              <button type="button" className="submit2">
                Log in with Google
              </button>
            </div>
            <div className="or">
              <h5>or</h5>
            </div>
            <div className="heading">
              <h4 className="heading_title">Log in with your email</h4>
            </div>
            <div className="inputs">
              <Zahidfield
                type="email"
                name="Email"
                variant="outlined"
                id="custom-css-standard-input"
                label="Email"
                onChange={InputEvent}
                value={Fullname.Email}
              />
              <Zahidfield
                type="password"
                name="Pass"
                variant="outlined"
                id="custom-css-standard-input"
                label="Password"
                onChange={InputEvent}
                value={Fullname.Pass}
              />
              <div className="para">
                <p>
                  Z Industries will use your data to personalize and improve
                  your experience and to provide you information about Z
                  Industries. You can change your preferences anytime. We may
                  use your data as described in our
                </p>

                <Link className="confirm_link">privacy policy</Link>
              </div>

              <div className="button">
                <button type="submit" className="submit">
                  LOG IN
                </button>
              </div>
              <div className="confirm">
                <h4 className="confirm_head">Don't have an account</h4>
                <Link to="/SignUp" className="confirm_link">
                  SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
