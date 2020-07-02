//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/login_form.css'; 
import { BrowserRouter, Route, Link } from "react-router-dom";



class ProfileForm extends React.Component{

 render() {

    return (
        
        <div class="login-page">

  <div id="profile" class="form">
    
    <form >
      <div class="profile_title">Profile</div>
      <div class="profile_username">User Name: Nghevabe</div>

      <div class="profile_fullname">Full Name: Tran Hoang Linh</div>

      <div class="profile_mail">Mail: linhthgc00913@fpt.edu.vn</div>
      <div class="profile_address">Address: 12 Lang Ha</div>

      <button>logout</button>
     
    </form>

  </div>
</div>

    );
  }


}

export default ProfileForm;
