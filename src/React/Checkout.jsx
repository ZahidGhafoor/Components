import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';


import "./Checkout.scss";

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Fullscreen } from "@material-ui/icons";





const Style = makeStyles({
  btn: {
    margin: "0.5rem 0",
    width: "100%",
    background: "red",
    height: "3rem",
    color: "#fff",
    position: "relative",

    float: "right",
    "&:hover": {
      color: "red",
      transition: ".5s ease-in-out",
    },
  },
});


const Checkout = () => {
  const classes = Style();

  const [FullName, useFullName] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Salary: "",
    Position: "",


  });

  const InputEvent = (event) => {

    const { value, name } = event.target;

    useFullName((pValue) => {
      return {
        ...pValue,
        [name]: value,
      }
    })


  };

  const CheckedInputEvent = (event) => {

    const { name, checked } = event.target;

    useFullName((pValue) => {
      return {
        ...pValue,
        [name]: checked,
      }
    })

  }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log("your first name is =", FullName.Name)
    console.log("your Email is =", FullName.Email)
    console.log("your Phone is =", FullName.Phone)
    console.log("your Salary is =", FullName.Salary)
    console.log("your Position is =", FullName.Position)
    alert("Form Submitted")
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="Checkout_full_div">
          <div className="Checkout_main_div">
            <div className="header_div">
              <p className="header_ptag">SHOPPING INFORMATION</p>
              <br />
              <p className="header_ptag2">Where your order will be delivered</p>
            </div>
            <div className="about">
              <p className="about_ptag">Shipping Details</p>\
              <div className="about_input">
                <TextField
                  type="text"
                  name="Name"
                  label="Name"
                  variant="outlined"
                  onChange={InputEvent}
                  value={FullName.Name}
                  style={{ width: "100%", marginRight: "15px", marginBottom: "10px" }}
                />
                <TextField
                  type="email"
                  name="Email"
                  label="Email"
                  variant="outlined"
                  onChange={InputEvent}
                  value={FullName.email}
                  style={{ width: "100%", marginRight: "15px", marginBottom: "10px" }}
                />
                <TextField
                  type="number"
                  name="Phone"
                  label="Phone"
                  variant="outlined"
                  onChange={InputEvent}
                  value={FullName.Phone}
                  style={{ width: "100%", marginBottom: "10px" }}
                />

                <TextField
                  type="text"
                  name="Salary"
                  label="Salary"
                  variant="outlined"
                  onChange={InputEvent}
                  value={FullName.COUNTRY}
                  style={{ width: "100%", marginBottom: "10px" }}
                />
                <TextField
                  type="text"
                  name="Position"
                  label="Position"
                  variant="outlined"
                  onChange={InputEvent}
                  value={FullName.STATE}
                  style={{ width: "100%", marginBottom: "10px" }}
                />
              </div>
            </div>
            <div className="button" >
              <Button id='materialbtn4' variant="contained" type="submit" className={classes.btn}>
                PLACE ORDER
              </Button>
            </div>

          </div>
        </div>
      </form>
    </>
  )
}

export default Checkout
