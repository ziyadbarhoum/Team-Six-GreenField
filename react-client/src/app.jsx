import React, { Component } from 'react';
import Axios from "axios";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import TeacherForm from './components/formData.jsx';

 import StudentForm from './components/connectpage.jsx';

  import SignInSignUpForm from './components/authentication.jsx';
  import LoginForm from './components/login.jsx';
  import SearchPage from './components/search.jsx';
  import SearchTe from './components/searchteach.jsx';
  import SignUpForm from './components/signup.jsx';

  // import First from './components/formdata.jsx';
import First from './components/techeardata.jsx';


  ;
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
              <div style= {header}>
             <h1  className="mbr-section-title py-3 mbr-fonts-style display-1" style= {text} ><strong>BOOK TEACHER </strong></h1>
             </div>
             <div className="row">
           <button  className="col-md-4" style={btn1}><Link to="/teacher">TEACHER</Link></button>
          <button  className="col-md-4" style={btn2}><Link to="/STUDENT">STUDENT</Link></button>
          </div>
              <Route  path="/student" component={SearchPage}>
              </Route>
              <Route  path="/studentf">
              <StudentForm/>
              </Route>


              <Route path="/teacher" component={SignInSignUpForm}>
              </Route>


              <Route path="/teacherForm" component={SignUpForm}>
              </Route>
              <Route path="/view" >
              <First/>
              </Route>

              <Route path="/SignUpform">
            <TeacherForm/>
          </Route>
          <Route path="/see">
            <SearchTe/>
          </Route>
          <Route path="/loginform">
            <LoginForm/>
          </Route>

          </div>
        </div>
      </Router>

         );
    }
  }
  var btn2={
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
    top: "10%",
    left: "70%",
    }
   var btn1={
    backfaceVisibility: "hidden",
    position: "absolute",
    cursor: "cursor",
    display: "inline-block",
    whiteSpace: "nowrap",
    background: "#FFFFFF",
    borderRadius: "10px",
    border: "1px solid #1D606C",
    borderWidth: "1px 1px 1px 1px",
    padding: "10px 20px 10px 20px",
    boxShadow: "inset 0px 1px 0px rgba(255,255,255,1),0px 1px 3px rgba(0,0,0,0.3)",
    fontSize: "20px",
    fontFamily: "cursive",
    fontWeight: "900",
    fontStyle: "italic",
    textShadow: "0px -1px 0px rgba(0,0,0,0.4)",
    top: "10%",
    left: "10%",
    transform:" translate(-50%, -50%)"
    }
   var header={
    width:"100%",
    margin:"auto",
    maxWidth:"525px",
    minHeight:"670px",
    boxShadow:"0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform:" translate(-50%, -50%)",
   }
   var text ={
    color:'white',
    top:"20%",
    left:"50%",
    position: "absolute",
    transform:" translate(-50%, -50%)",
    textAlign: "-webkit-center",
     fontSize: "-webkit-xxx-large",
    fontStyle: "italic",
    fontFamily: "cursive",
   }

{/* <div>
    <Header/>
    <Content/>
    </div>);
  }
} */}
// class Header extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>BOOK TEACHER </h1>
//       </div>
//     )
//   }
// }
// class Content extends React.Component{
//   render(){
//     return(

// <Router>
//       <div>
{/*

        <button><Link to="/TEACHER">TEACHER</Link></button>
          <button><Link to="/STUDENT">STUDENT</Link></button>


        <Switch>
          <Route path="/TEACHER">
            <SignInSignUpForm/>
          </Route>
          <Route path="/STUDENT">
            <SearchPage/>
          </Route>

        </Switch>
      </div>
    </Router> */}
