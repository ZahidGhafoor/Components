import React from 'react'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom';

// import MobileCont from './React/MobileCont';
// import Cont from './Cont';
import Checkout from './React/Checkout';
import ConfirmChk from './React/ConfirmChk'
import Cart from './React/Cart'
import SignUp from './React/SignUp'
import Login from './React/Login'
// import test from './test'

const App = () => {
    return (
        <>
             <Router>
                 <Switch>
                    // <Route path='/' exact component={Login} />
                    // <Route path='/SignUp' component={SignUp} />
                    // <Route path='/Login' component={Login} />
                    
                    
                    
                </Switch> 
                {/* <Cart/> */}
                {/* <Login/> */}
                {/* <SignUp/> */}
            </Router>

            
        </>
    )
}

export default App
