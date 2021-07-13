import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import logo from "../React/titlelog.png";
import "./SignUp.scss";
import Login from "./Login";

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

const SignUp = () => {
  const [Fullname, useFullNme] = useState({
    FName: "",
    Email: "",
    Pass: "",
    CPass: "",
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
      "YOu First name is =",
      Fullname.FName,
      "Your Email is =",
      Fullname.Email,
      "Your Last name is =",
      Fullname.Pass,
      "Your msg is =",
      Fullname.CPass
    );
    alert("Your Query has been submitted sucessfully");
  };

  return (
    <>
      <form autoComplete= "off" onSubmit={onSubmit}>
        <div className="main_container">
          <div className="centrel_div">
            <div className="img">
              <img className="logo_img" src={logo} alt="Error" />
            </div>
            <div className="heading">
              <h4 className="heading_title">Entre Your Details</h4>
            </div>
            <div className="inputs">
              <Zahidfield
               
                variant="outlined"
                id="custom-css-standard-input"
                label="Full Name"
                type="text"
                name="FName"
                onChange={InputEvent}
                value={Fullname.FName}
              />
              <Zahidfield
             
                variant="outlined"
                id="custom-css-standard-input"
                label="Email"
                type="email"
                name="Email"
                onChange={InputEvent}
                value={Fullname.Email}
              />
              <Zahidfield
               
                variant="outlined"
                id="custom-css-standard-input"
                label="Password"
                type="password"
                name="Pass"
                onChange={InputEvent}
                value={Fullname.Pass}
              />
              <Zahidfield
               
                variant="outlined"
                id="custom-css-standard-input"
                label="Confirm Password"
                type="password"
                name="CPass"
                onChange={InputEvent}
                value={Fullname.CPass}
              />

              <div className="button">
                <button type="submit" className="submit">
                  SIGN UP
                </button>
              </div>
              <div className="confirm">
                <h4 className="confirm_head">Already have an account</h4>
                <Link to="/Login" className="confirm_link">
                  LOG IN
                </Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
