import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';

import Layout from './layouts/Layout';
import Login from './pages/Auth/Login/Login';
import Logout from './pages/Auth/Logout/Logout';
import SignUp from './pages/Auth/SignUp/SignUp';
import Todos from './pages/Todos/Todos';

const App = () => {
  const loggedIn = useSelector(({ firebase }) =>
    firebase.auth.uid ? true : null
  );
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path='/' component={Todos} />
        <Route exact path='/logout' component={Logout} />
        <Redirect to='/' />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Redirect to='/login' />
      </Switch>
    );
  }
  return <Layout>{routes}</Layout>;
};

export default App;
