import React, { Component } from 'react';
class TeacherForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            subject:'',
            place:'',
            price:'',
            phone:'',
            email:'',
            description:''
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
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField">
                <label className="Form1" htmlFor="name">Name</label>
                <input type="text" id="name" className="Form1" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="subject">Subject</label>
                <input type="subject" id="subject" className="Input1" placeholder="Enter your subject" name="subject" value={this.state.subject} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="place">Place</label>
                <input type="place" id="place" className="Input1" placeholder="Enter your place" name="place" value={this.state.place} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="price">Price</label>
                <input type="price" id="price" className="Input1" placeholder="Enter your price" name="price" value={this.state.price} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="phone">Phone</label>
                <input type="phone" id="phone" className="Input1" placeholder="Enter your phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="email">Email</label>
                <input type="email" id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="description">Description</label>
                <input type="description" id="description" className="Input1" placeholder="Enter your description" name="description" value={this.state.description} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button className="Button1">Submit</button>
              </div>
            </form>
          </div>
        );
    }
}
export default TeacherForm;