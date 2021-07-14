import React from "react";
import { Link } from "react-router-dom";

import QueueIcon from "@material-ui/icons/Queue";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import InsertInvitationIcon from "@material-ui/icons/InsertInvitation";
import AllInclusiveIcon from "@material-ui/icons/AllInclusive";
import HighlightIcon from "@material-ui/icons/Highlight";

import "./Admin.scss";

import Header from "./Header"

import img1 from "./titlelog.png";


const Admin = () => {
  return (
    <>
      <div className="admin_container">
        <div className="left_sidebar">
          <div className="img">
            <img className="left_img" src={img1} alt="Error" />
          </div>

          <div className="sidebar_data">
            <Link className="list1">
              <QueueIcon className="icon" />
              <h3 className="link">Add Modal</h3>
            </Link>

            <Link className="list1">
              <QueueIcon className="icon" />
              <h3 className="link">Add Category</h3>
            </Link>

            <Link className="list1">
              <AccountCircleIcon className="icon" />
              <h3 className="link">Profiles</h3>
            </Link>

            <Link className="list1">
              <InsertInvitationIcon className="icon" />
              <h3 className="link">Invitations</h3>
            </Link>

            <Link className="list1">
              <AllInclusiveIcon className="icon" />
              
              <h3 className="link">All Modle</h3>
            </Link>

            <Link className="list1">
              <HighlightIcon className="icon" />
              <h3 className="link">Emial Marketing</h3>
            </Link>

          </div>
        </div>
      </div>
      <Header/>
      
    </>
  );
};

export default Admin;
