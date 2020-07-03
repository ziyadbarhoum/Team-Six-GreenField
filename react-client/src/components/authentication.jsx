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
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <div className="Form1">
          <button className="Button1"><Link to="/LoginForm">LOGIN</Link></button>
          </div>
          <div className="Form1">
          <button className="Button1"><Link to="/teacherForm">SignUp</Link></button>
      </div>
    </form>
  </div>
        );
    }
}
export default SignInSignUpForm;
