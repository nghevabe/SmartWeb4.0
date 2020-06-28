//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/login_form.css'; 
import { BrowserRouter, Route, Link } from "react-router-dom";



class LoginForm extends React.Component{

 render() {

    return (
        
        <div class="login-page">
  <div class="form">
    
    <form class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <button>login</button>
      <p class="message">Not registered?
 <Link to="/register">
             
       <a href="#">Create an account</a>

 </Link>
       </p>
    </form>

  </div>
</div>

    );
  }


}

export default LoginForm;
