import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import App from './App.jsx';
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Private from './screens/Private.jsx';
import Admin from './screens/Admin.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';
// import CreateRoute from './screens/CreatePost'
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
// import iijis from './iijis';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(


  <BrowserRouter>
    <Switch>
      <Route exact path='/' exact render={props => <App {...props} />} />
      <Route exact path='/login' exact render={props => <Login {...props} />} />
      <Route exact path='/register' exact render={props => <Register {...props} />} />
      <Route exact path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
      <Route exact path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
      {/* <Route path='/create/post' exact component={CreateRoute} /> */}
      <Route exact path='/users/activate/:token' exact render={props => <Activate {...props} />} />
      <PrivateRoute exact path="/private" exact component={Private} />
      <AdminRoute exact path="/admin" exact component={Admin} />
     
    </Switch>
  </BrowserRouter>

  // <iijis/>
  ,
  document.getElementById('root')
);
