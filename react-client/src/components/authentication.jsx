import React, { Component } from 'react';
class SignInSignUpForm extends Component {
    constructor() {
        super();
    }
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
          <div className="Form1">
          <button className="Button1">SIGNUP</button>
          </div>
          <div className="Form1">
          <button className="Button1">LOGIN</button>
      </div>
    </form>
  </div>
        );
    }
}
export default SignInSignUpForm;