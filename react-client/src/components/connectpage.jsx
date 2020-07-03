

import React, { Component } from 'react';
import SearchTe from  './searchteach.jsx';
import axios from "axios";
class StudentForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            phone:'',
            email:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
      let {name, value} = e.target;
      this.setState({
        [name]: value
      });
  }
    handleSubmit(e) {
      e.preventDefault();
      const newstudent= {
        name: this.state.name,
        phone: this.state.phone ,
        email: this.state.email ,
      };
      console.log(newstudent)
  axios.post('http://localhost:9000/studentf', newstudent)
  .then((res) => {
      console.log(res.data)
  }).catch((error) => {
      console.log(error)
  });

}

    render() {
        return (
        <div className="FormCenter"  style={h1}>
            <form onSubmit={this.handleSubmit} className="FormFields">
              <div className="FormField"  style={h3}>
                <label className="Form1" htmlFor="name">Name</label>
                <input  style={h2} type="text" id="name" className="Form1" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="phone">Phone</label>
                <input  style={h2} type="phone" id="phone" className="Input1" placeholder="Enter your phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                <label className="Form1" htmlFor="email">Email</label>
                <input  style={h2} type="email" id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>
              <div className="FormField">
                  <button  style={h4} className="Button1" type="submit">Submit</button>
              </div>
              <div className="FormField">
                  <button style={h4}className="Button1">Submit</button>
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
 top: "80%",
 left: "35%",
}
export default StudentForm;















// class StudentForm extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             phone:'',
//             email:''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//     handleChange(e) {
//         let target = e.target;
//         let name = target.name;
//         this.setState({
//           [name]: value
//         });
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         console.log('The form was submitted with the following data:');
//         console.log(this.state);
//     }
//     render() {
//         return (
//         <div className="FormCenter">
//             <form onSubmit={this.handleSubmit} className="FormFields">
//               <div className="FormField">
//                 <label className="Form1" htmlFor="name">Name</label>
//                 <input type="text" id="name" className="Form1" placeholder="Enter your full name" name="name" value={this.state.name} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//                 <label className="Form1" htmlFor="phone">Phone</label>
//                 <input type="phone" id="phone" className="Input1" placeholder="Enter your phone" name="phone" value={this.state.phone} onChange={this.handleChange} />
//               </div>
//               <div className="FormField">
//                 <label className="Form1" htmlFor="email">Email</label>
//                 <input type="email" id="email" className="Input1" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
//               </div>
//               <div>
//                   <button ><Link to="/see">Cancle</Link></button>

//               </div>
//               <div >
//                   <button><Link to="/see">Connect</Link></button>
//               </div>
//             </form>
//           </div>
//         );
//     }
// }
// export default StudentForm;

