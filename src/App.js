import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Drawer from "./elements/Admin/Drawer";

// import MobileCont from './React/MobileCont';
// import Cont from './Cont';
import Checkout from "./React/Checkout";
import ConfirmChk from "./React/ConfirmChk";
import MobileCont  from "./React/MobileCont";
import Cart from "./React/Cart";
import SignUp from "./React/SignUp";
import { Log } from "./React/Log";

import SignIn from "./React/FundsMap/SignIn";

import Admin from "./React/Admin/Admin";

import Dfile from "./React/ZIndustries/Dfile";
import Api from "./React/ApiCall/Api";
import Axois from "./React/ApiCall/Axois";
// import test from './test'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Axois} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Log} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={Admin} />
        </Switch>
        {/* <Cart/> */}
      </Router>
    </>
  );
};

export default App;
