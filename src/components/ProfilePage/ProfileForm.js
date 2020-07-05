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

      <div class="profile_username"><b>User Name:</b> Nghevabe </div>

      <div class="profile_fullname"><b>Full Name:</b> Tran Hoang Linh</div>

      <div class="profile_mail"><b>Mail:</b> linhthgc00913@fpt.edu.vn</div>

      <div class="profile_address"><b>Address:</b> 12 Lang Ha</div>

      <div class="profile_house_device"><b>House Device Connected:</b> 7</div>

      <div class="profile_removable_device"><b>Removable Device Connected:</b> 4</div>

      <button>logout</button>
     
    </form>

  </div>
</div>

    );
  }


}

export default ProfileForm;
