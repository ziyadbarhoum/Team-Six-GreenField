import React, { Component } from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  import TeacherForm from './components/formData.jsx';

  import SignInSignUpForm from './components/authentication.jsx';
  import LoginForm from './components/login.jsx';
  import SearchPage from './components/search.jsx';
  import SearchTe from './components/searchteach.jsx';
  import SignUpForm from './components/signup.jsx';
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
              <div>
//         <h1>BOOK TEACHER </h1>
//       </div>
                      <button><Link to="/teacher">TEACHER</Link></button>
          <button><Link to="/STUDENT">STUDENT</Link></button>
              <Route  path="/student" component={SearchPage}>
              </Route>
              <Route path="/teacher" component={SignInSignUpForm}>
              </Route>


              <Route path="/teacherForm" component={SignUpForm}>
              </Route>
              <Route path="/view" component={First}>
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
          <Route path="/SearchTe">
            < SearchTe/>
          </Route>
          </div>
        </div>
      </Router>

         );
    }
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
