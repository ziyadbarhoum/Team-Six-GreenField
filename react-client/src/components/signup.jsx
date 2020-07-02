import React, { Component } from 'react';
import TeacherForm from './formData.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: ''
        };
    }
    render() {
        return (
        <div className="FormCenter">
            <form className="FormFields" method="POST"  action='/signup'>
              <div >
                <label>Email</label>
                <input type="text"  placeholder="Enter your Email" name='email' />
              </div>
              <div >
                <label >Password</label>
                <input type="password"  placeholder="Enter your password" name="password" />
              </div>
              
              <div >
              <button className="Button1" type='submit' value='sign up'> <Link to="/SignUpform">SignUp</Link></button>
              </div>


</form>
          </div>
        );
    }
}
export default SignUpForm;
// import React, { Component } from 'react';
// import TeacherForm from './formData.jsx';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useRouteMatch,
//   useParams
// } from "react-router-dom";
// class SignUpForm extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: '',
//             password: ''
//         };

//     }

//     render() {
//         return (

// <div >
//                 <label>Email</label>
//                 <input type="text"  placeholder="Enter your Email" name='email' />
//               </div>
//               <div >
//                 <label >Password</label>
//                 <input type="password"  placeholder="Enter your password" name="password" />
//               </div>

//               <Router>
//                 <div>

//               <button className="Button1" type='submit'> <Link to="/SignUpform">SignUp</Link></button>

//               <Switch>
//           <Route path="/SignUpform">
//             <TeacherForm/>
//           </Route>

//         </Switch>
//       </div>
//     </Router>



//         );
//     }
// }
// export default SignUpForm;