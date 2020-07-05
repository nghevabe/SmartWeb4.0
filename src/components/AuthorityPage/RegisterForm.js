//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/login_form.css'; 
import { BrowserRouter, Route, Link } from "react-router-dom";



class RegisterForm extends React.Component{

 render() {

    return (
        
        <div class="register-page">
  <div class="form">

    <form id="register" class="login-form">
      <input type="text" placeholder="name"/>
      <input type="password" placeholder="password"/>
      
      <input type="text" placeholder="email address"/>
      <input type="text" placeholder="phone number"/>
      <button>create</button>
    </form>

  </div>
</div>

    );
  }


}

export default RegisterForm;
