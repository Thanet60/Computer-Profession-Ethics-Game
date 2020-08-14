import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //import component from App.js
import Signin from './Signin';
import Login from './Login';
import SelectLevel from './SelectLevel';
import * as serviceWorker from './serviceWorker';
import {Router,Route,Link,browserHistory} from 'react-router'

ReactDOM.render( 
  <Router history={browserHistory}>
      <Router path="/" component={App}/>
      <Router path="/Signin" component={Signin}/> 
      <Router path="/Login" component={Login}/>
      <Router path="/SelectLevel" component={SelectLevel}/> 
    </Router>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
