import React, { Component } from 'react';
class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        let target = e.target;
        let name = target.name;
        this.setState({
          [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="Form1">
                <label className="Label1" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="Form1">
                <label className="Label1" htmlFor="password">Password</label>
                <input type="password" id="password" className="Input1" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>
              <div className="Form1">
                  <button className="Button1">Login</button>
              </div>
            </form>
          </div>
        );
    }
}
export default LoginForm;