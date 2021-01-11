import loadable from 'loadable-components';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import './Assets/Css/PortalTheme.css';

const Loading = () => (
  <div className="animated fadeIn pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);
const Login = loadable(() => import('./Pages/Authentication/LoginPage'), { LoadingComponent: Loading });
const DefaultLayout = loadable(() => import('./containers'), { LoadingComponent: Loading });

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {localStorage.getItem('token') ? null : <Route path="/login" name="Login" component={Login} />}
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </Router>
    );
  }
}

export default App;
