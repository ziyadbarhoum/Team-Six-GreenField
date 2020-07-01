import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import SearchPage from './components/search.jsx';
import SignInSignUpForm from './components/authentication.jsx';
import SignUpForm from './components/signup.jsx';

export default class App extends React.Component {
  render () {
    return (
    <Router basename="">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">
            <div className="PageSwitcher">
                              </div>

              <div className="FormTitle">
              </div>
                      <button><Link to="/teacher">TEACHER</Link></button>
          <button><Link to="/STUDENT">STUDENT</Link></button>

              <Route exact path="/student" component={SearchPage}>
              </Route>
              <Route path="/teacher" component={SignInSignUpForm}>
              </Route>
              <Route path="/teacherForm" component={SignUpForm}>
              </Route>

          </div>

        </div>
      </Router>
       );
  }
}


