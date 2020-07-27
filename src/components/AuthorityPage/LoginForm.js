//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/login_form.css'; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';


class LoginForm extends React.Component{

  constructor(props) {

    super(props);

      this.myLogin = this.myLogin.bind(this);
      this.getUserList = this.getUserList.bind(this);
      this.getUserById = this.getUserById.bind(this);
      this.getUserNameValue = this.getUserNameValue.bind(this);
      this.getPasswordValue = this.getPasswordValue.bind(this);

      this.username = "";
      this.password = "";

      
  }

  getUserById() {

    axios({
      method: 'get',
      url: 'http://localhost:8080/rest/users/100',
      headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU0MzA3MzksInVzZXJuYW1lIjoibmdoZXZhYmUifQ.PmIZEN8Idv7FxRrsvmF5LpIaBIvHzzxeL6b3bmQ9HbM`
      }, 
    }).then(res => {
      console.log(res.data.username)
    })


  }


  getUserList() {

    axios({
      method: 'get',
      url: 'http://localhost:8080/rest/users',
      headers: {
        'Authorization': `eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU0MzA3MzksInVzZXJuYW1lIjoibmdoZXZhYmUifQ.PmIZEN8Idv7FxRrsvmF5LpIaBIvHzzxeL6b3bmQ9HbM`
      }, 
    }).then(res => {
      var kq = res.data;

      kq.map(post => (
        console.log(post.username)
        ))

       // console.log(res.data)
     })


  }

  myLogin() {

//eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTU0MzA3MzksInVzZXJuYW1lIjoibmdoZXZhYmUifQ.PmIZEN8Idv7FxRrsvmF5LpIaBIvHzzxeL6b3bmQ9HbM
axios({
  method: 'post',
  url: 'http://localhost:8080/rest/login',
  headers: {}, 
  data: {
    username: this.username,
    password: this.password, // This is the body part
  }
}).then(res => {

  document.getElementById("errorText").innerHTML = "";
  alert('Login Successful !')

})
.catch(e =>{ 

  if(e.response)
  {
      document.getElementById("errorText").innerHTML = "* " + e.response.data;
  }

})
}

    getUserNameValue(e) {
      let getTextAreaValue = e.target.value;
      this.username = getTextAreaValue;
}

    getPasswordValue(e) {
      let getTextAreaValue = e.target.value;
      this.password = getTextAreaValue;
}

render() {

  return (

    <div class="login-page">
    <div class="form">
    <div id="errorText" class="labelError"></div>
    <form id="login" class="login-form">
    <input  onChange={this.getUserNameValue} type="text" placeholder="username"/>
    <input  onChange={this.getPasswordValue} type="password" placeholder="password"/>
    <div class="btn_login" type="submit" onClick={this.myLogin}>login</div>
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
