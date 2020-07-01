import React, { Component } from 'react';
import SignUpForm from './signup.jsx';
import LoginForm from './login.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

class SignInSignUpForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
          <Router>
           <div>
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <div className="Form1">
          <button className="Button1"><Link to="/SIGNUP">SIGNUP</Link></button>
          </div>
          <div className="Form1">
          <button className="Button1"><Link to="/LOGIN">LOGIN</Link></button>
      </div>
    </form>
  </div>

          <Route path="/SIGNUP">
            <SignUpForm/>
          </Route>
          <Route path="/LOGIN">
            <LoginForm/>
          </Route>

        
      </div>
    </Router>
        );
    }
}

export default SignInSignUpForm;