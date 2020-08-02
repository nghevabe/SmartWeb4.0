//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/login_form.css'; 
import { BrowserRouter, Route, Link } from "react-router-dom";
import axios from 'axios';

import Cookies from 'universal-cookie';

const cookies = new Cookies();

class ProfileForm extends React.Component{


  constructor(props) {

    super(props);

      this.logOut = this.logOut.bind(this);
      this.getUserDetail = this.getUserDetail.bind(this);

      this.state = { userName: '', fullName: '', mail: '', address: '', phone: '' };

      this.getUserDetail()

  }

  getUserDetail() {

   const token = cookies.get('token')

   //alert(token)
  
    axios({
      method: 'get',
      url: 'http://localhost:8080/rest/user_detail',
      headers: {
        'Authorization': token
      }, 
    }).then(res => {

        

      this.setState({
          userName: res.data.username,
          fullName: res.data.fullname,
          mail: res.data.mail,
          address: res.data.address,
          phone: res.data.phone,
      });

      

    }).catch(e =>{ 

  if(e.response)
  {
     cookies.set('token', 'none', { path: '/' });
     alert('You Not Login');
     this.props.history.push("/");
     window.location.reload(false);
  }

})

  }

  logOut() {

    
    cookies.set('token', 'none', { path: '/' });

    this.props.history.push("/");
    window.location.reload(false);

  }

 render() {

    

    return (
        
        <div class="login-page">

  <div id="profile" class="form">
    
    <form >
      <div class="profile_title">Profile</div>

      <div class="profile_username"><b>User Name:</b> {this.state.userName} </div>

      <div class="profile_fullname"><b>Full Name:</b> {this.state.fullName} </div>

      <div class="profile_mail"><b>Mail:</b> {this.state.mail} </div>

      <div class="profile_address"><b>Address:</b> {this.state.address} </div>

      <div class="profile_phone"><b>Phone:</b> {this.state.phone} </div>

      <div class="profile_house_device"><b>House Device Connected:</b> 7</div>

      <div class="profile_removable_device"><b>Removable Device Connected:</b> 4</div>

      <div class="btn_login" type="submit" onClick={this.logOut}>logout</div>
     
    </form>

  </div>
</div>

    );
  }


}

export default ProfileForm;
