import React from "react";

import "./Cart.scss";
import img1 from "./s1.jpg";
import img2 from "./s3.jpg";
import img3 from "./s6.jpg";
import img4 from "./s10.jpg";

import Button from '@material-ui/core/Button';


import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";

const useStyles = makeStyles({
  table: {
    minWidth: "inherit",
  },
  btn: {
    margiTtop: 10,
    display: "flex",
    // justifyContent: "flex-end",
    alignItems: "centre",
    width: "100%",
    backgroundColor: " #2f55d4",
    fontWeight: "bold",
    height: "2.5rem",
    color: "#fff",
    float: "right",
    "&:hover": {
      transition: ".5s ease-in-out",
    },
  },
  btn2: {
    margiTtop: 10,
    display: "flex",
    // justifyContent: "flex-end",
    alignItems: "centre",
    width: "100%",
    backgroundColor: " #2f55d4",
    fontWeight: "bold",
    height: "2.5rem",
    color: "#fff",
    float: "right",
    "&:hover": {
      transition: ".5s ease-in-out",
    },
  },
  btn3: {
    margiTtop: 10,
    display: "flex",
    // justifyContent: "flex-end",

    alignItems: "centre",
    width: "100%",
    backgroundColor: " #eaeefb",
    boxShadow: "0 3px 5px 0 #2f55d44d",
    fontWeight: "bold",
    height: "2.5rem",
    color: "#3b55d4",
    float: "right",
    "&:hover": {
      color: "#fff",
      transition: ".5s ease-in-out",
      backgroundColor: " #2f55d4",
    },
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,

    fontWeight: "bold",
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 16,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#f8f9fc",
    },
  },
}))(TableRow);

const rows = [
  {
    name: "T-Shirt",
    price: "$255.00",
    quantity: "7",
    imgsrc: img1,
    total: "$510",
    plusicon: "+",
    minusicon: "-",
  },
  {
    name: "Branded Watch",
    price: "$525.00",
    quantity: "3",
    imgsrc: img2,
    total: "$810",
    plusicon: "+",
    minusicon: "-",
  },
  {
    name: "Nike Shoes",
    price: "$125.00",
    quantity: "5",
    imgsrc: img3,
    total: "$610",
    plusicon: "+",
    minusicon: "-",
  },
  {
    name: "Sunglasses",
    price: "$100.00",
    quantity: "5",
    imgsrc: img4,
    total: "$500",
    plusicon: "+",
    minusicon: "-",
  },
];

const row2 = [
  {
    Tax: "Taxes",
    Money: "$400",
  },

  {
    Tax: "Total",
    Money: "$2400",
  },
];

const Cart = () => {
  const state = useState();
  const [count, setCount] = useState(5);
  const add = () => {
    setCount(count + 1);
  };
  const [count2, setCount2] = useState(5);
  const minus = () => {
    setCount2(count2 - 1);
  };

  const classes = useStyles();
  return (
    <>
      <div className="main_container">
        <div className="cart_container">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Products</StyledTableCell>
                  <StyledTableCell align="right">Price</StyledTableCell>
                  <StyledTableCell align="right">Qty</StyledTableCell>
                  <StyledTableCell align="right">Total</StyledTableCell>
                  {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      style={{ display: "flex", alignItems: "center" }}
                      component="th"
                      scope="row"
                    >
                      <img className="tilte_img" src={row.imgsrc} alt="" />
                      {row.name}
                    </StyledTableCell>
                    {/* <StyledTableCell align="right"></StyledTableCell> */}
                    <StyledTableCell align="right">{row.price}</StyledTableCell>
                    <StyledTableCell
                      align="right"
                      style={{ fontSize: "1.8rem" }}
                    >
                      <div className="quantiy">
                        <span onClick={minus} className="minus">
                          {row.minusicon}
                        </span>
                        <span className="quant">{count2}</span>
                        <span onClick={add} className="plus">
                          {" "}
                          {row.plusicon}
                        </span>
                      </div>
                    </StyledTableCell>
                    <StyledTableCell
                      style={{ fontWeight: "bold" }}
                      align="right"
                    >
                      {row.total}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>

        <div className="body">
          <div className="buttons">
            <div className="button_1">
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                Shop More
              </Button>
            </div>
            <div className="button_2">
            <Button
              className={classes.btn3}
              variant="contained"
              color="primary"
            >
              Update Cart
            </Button>
            </div>
          </div>

          <div className="main_snd">
            <div className="snd_box">
              <TableContainer style={{ width: "300px" }} component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Subtotal</TableCell>
                      <TableCell align="center">$2190</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row2.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {row.Tax}
                        </TableCell>
                        <TableCell align="center">{row.Money}</TableCell>
                        <TableCell align="left">{row.fat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            <div className="sndbox_button">
              <Button
                className={classes.btn2}
                variant="contained"
                color="primary"
              >
                Proceed To Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
