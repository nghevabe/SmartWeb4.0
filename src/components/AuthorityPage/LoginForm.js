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
    username: 'nghevabe',
    password: '123', // This is the body part
  }
}).then(res => {



        console.log(res.data)
      })
      .catch(e => console.log(e))

      }

 render() {

    return (
        
        <div class="login-page">
  <div class="form">
    
    <form id="login" class="login-form">
      <input type="text" placeholder="username"/>
      <input type="password" placeholder="password"/>
      <div class="btn_login" type="submit" onClick={this.getUserList}>login</div>
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
 /*
    axios.get('http://localhost:8080/rest/users/100', {
      params: {
        token: 'eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1OTUzNTEyMDMsInVzZXJuYW1lIjoibmdoZXZhYmUifQ.wXoccec_PqUg1f4lUgVfHKRo_hiRQNQ2EFuEgFg8D3g'
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
      */

/*
    axios.get('http://dummy.restapiexample.com/api/v1/employee/1', {
    
    })
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
*/