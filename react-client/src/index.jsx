import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import App from './app.jsx';
import TeacherForm from './components/formData.jsx';

import SearchPage from './components/search.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



ReactDOM.render(<App />, document.getElementById('app'))
