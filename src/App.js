import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Drawer from "./elements/Admin/Drawer";


// import MobileCont from './React/MobileCont';
// import Cont from './Cont';
import Checkout from "./React/Checkout";
import ConfirmChk from "./React/ConfirmChk";
import Cart from "./React/Cart";
import SignUp from "./React/SignUp";
import Login from "./React/Login";

import Admin from "./React/Admin/Admin"
// import test from './test'

const App = () => {
  return (
    <>
      <Router>
        <Switch>
           <Route path="/" exact component={Login} />
          <Route path="/SignUp" component={SignUp} />
          <Route path="/Login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin" component={Admin} />
        </Switch>
        {/* <Cart/> */}
      </Router>

    </>
  );
};

export default App;
