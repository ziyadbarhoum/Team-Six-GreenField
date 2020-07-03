import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import axios from 'axios';
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
        //this.handleChange = this.handleChange.bind(this);
        this.updateName= this.updateName.bind(this);
        this.updateSubject= this.updateSubject.bind(this);
        this.updatePlace= this.updatePlace.bind(this);
        this.updatePrice= this.updatePrice.bind(this);
        this.updatePhone= this.updatePhone.bind(this);
        this.updateemail= this.updateemail.bind(this);
        this.updatediscription= this.updatediscription.bind(this);


        this.handleSubmit = this.handleSubmit.bind(this);

    }
  //   handleChange(e) {
  //     let {name, value} = e.target;
  //     this.setState({
  //       [name]: value
  //     });
  // }

  updateName(evt) {

    this.setState({
     name : evt.target.value
    });
  }

  updateSubject(evt) {
    this.setState({
     subject : evt.target.value
    });
  }

  updatePlace(evt) {
  this.setState({
     place : evt.target.value
    });
  }
  updatePrice(evt) {

    this.setState({
     price : evt.target.value
    });
  }
  updatePhone(evt) {

    this.setState({
     phone : evt.target.value
    });
  }
  updateemail(evt) {

    this.setState({
    email : evt.target.value
    });
  }
  updatediscription(evt) {

    this.setState({
     description : evt.target.value
    });
  }
    // handleChange(event) {
    //   alert(this.state.email);
    //   this.setState({name: event.target.name});
    //   this.setState({password: event.target.password});
    // }



    handleSubmit(e) {
      e.preventDefault();
      const newRow = {
        name: this.state.name,
        subject: this.state.subject ,
        email: this.state.email ,
        place: this.state.place ,
        price: this.state.price ,
        phone:this.state.phone ,
        description:this.state.description

      };
      console.log(newRow)
  axios.post('http://localhost:9000/mainForm', newRow)
  .then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });

}

    render() {
        return (
          <div className="FormCenter" style={h1}>
          <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField" style={h3}>
              <label className="Form1" htmlFor="name">Name</label>
              <input type="text" id="name" className="Form1" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.updateName}  style={h2}/>
            </div>
            <div className="FormField" style={h3}>
              <label className="FormField__Label" htmlFor="subject">Subject</label>
              <input type="subject" id="subject" style={h2} className="Input1" placeholder="Enter your subject" name="subject" value={this.state.subject} onChange={this.updateSubject} />
            </div>
            <div className="FormField" style={h3}>
              <label className="Form1" htmlFor="place">Place</label>
              <input type="place" id="place"  style={h2}className="Input1" placeholder="Enter your place" name="place" value={this.state.place} onChange={this.updatePlace} />
            </div>
            <div className="FormField" style={h3}>
              <label className="Form1" htmlFor="price">Price</label>
              <input type="price" id="price"  style={h2} className="Input1" placeholder="Enter your price" name="price" value={this.state.price} onChange={this.updatePrice} />
            </div>
            <div className="FormField" style={h3}>
              <label className="Form1" htmlFor="phone">Phone</label>
              <input type="phone"  style={h2} id="phone" className="Input1" placeholder="Enter your phone" name="phone" value={this.state.phone} onChange={this.updatePhone} />
            </div>
            <div className="FormField" style={h3}>
              <label className="Form1" htmlFor="email">Email</label>
              <input type="email"  style={h2} id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.updateemail} />
            </div>
            <div className="FormField" style={h3}>
              <label className="Form1" htmlFor="description">Description</label>
              <input type="description" style={h2} id="description" className="Input1" placeholder="Enter your description" name="description" value={this.state.description} onChange={this.updatediscription} />
            </div>
            <div className="FormField" style={h3}>
            <button style={h4} type='submit'>Submit</button>
            </div>
          </form>
        </div>
        );
    }
}
const h1={
  "border-radius": "5px",
 "background-color": "#F2F2F2",
 "padding": "20px",
 cursor: "cursor",
 display: "inline-block",
 background: "#FFFFFF",
 border: "1px solid #1D606C",
 borderWidth: "1px 1px 1px 1px",
   borderRadius: "10px",
 padding: "10px 20px 10px 20px",
 fontSize: "20px",
 fontFamily: "cursive",
 fontWeight: "900",
 fontStyle: "italic",
 textShadow: "0px -1px 0px rgba(0,0,0,0.4)",
 position: "absolute",
 top: "35%",
 left: "35%",
}
const h2={
      "font-size": "16px",
       "border-radius":"5px",
           "background": "#F9F1F7",
           "border":"#000000",
           "padding": "10px",
}
const h3={
   "margin": "20%",
    top: "40%",
    left: "50%",
}
const h4={
cursor: "cursor",
 display: "inline-block",
 background: "#FFFFFF",
 border: "1px solid #1D606C",
 borderWidth: "1px 1px 1px 1px",
   borderRadius: "10px",
 padding: "10px 20px 10px 20px",
 fontSize: "20px",
 fontFamily: "cursive",
 fontWeight: "900",
 fontStyle: "italic",
 textShadow: "0px -1px 0px rgba(0,0,0,0.4)",
 position: "absolute",
 top: "95%",
 left: "35%",
}
export default TeacherForm;
