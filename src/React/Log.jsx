import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import TextField from "@material-ui/core/TextField";
import FacebookIcon from "@material-ui/icons/Facebook";

import logo from "../React/titlelog.png";
import logo2 from "../React/google.png";
import "./Login.scss";
import { Link } from "react-router-dom";

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

const styles = (theme) => ({
  root: {
    // margin: 5,
    padding: theme.spacing(),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(),
    top: theme.spacing(),
    color: theme.palette.grey[900],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: -4,
    // padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function Log() {
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogContent dividers style={{backgroundColor:"#25303c", padding:0}}>
          <form autoComplete="off">
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
                      Industries. You can change your preferences anytime. We
                      may use your data as described in our
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
        </DialogContent>
      </Dialog>
    </>
  );
}

export {Log};
