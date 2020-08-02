import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";

import Cookies from 'universal-cookie';

import LoginForm from '../AuthorityPage/LoginForm';

class Header extends Component{

//static token = 'XXX'

 handleInputValue(val) {
    this.setState({ inputVal: val });
  }

 render(){

var head = {

  width: 'auto',
  marginLeft: '0px',
  marginRight: '-1px',
  backgroundColor: "#008577",
  border: '1px solid #008577',
  marginBottom: '-1px',
  zIndex: '2',
  };


  return (
   
   <nav class="navbar navbar-default" role="navigation" >
   	<div style={head} class="container-fluid" >
 
   		<div class="navbar-header">
   			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
   				<span class="sr-only">Toggle navigation</span>
   				<span class="icon-bar"></span>
   				<span class="icon-bar"></span>
   				<span class="icon-bar"></span>
   			</button>
   			<a class="navbar-brand" style={{ color: 'white'}} >
            <Link to="/">
              Home
            </Link>
        </a>
   		</div>
   
   	
   		<div class="collapse navbar-collapse navbar-ex1-collapse">
   			<ul class="nav navbar-nav">
   				<li>
          <a style={{ color: 'white'}} >
            <Link to="/assistant">
              Assistant
            </Link>
          </a>
          </li>

   				<li>
          <a style={{ color: 'white'}} >
            <Link to="/house">
              House Controller
            </Link>
          </a>
          </li>

   			<li>
          <a style={{ color: 'white'}} >
            <Link to="/device">
              Device Controller
            </Link>
          </a>
        </li>

         

          <li>

 {(() => {
          
const cookies = new Cookies();
if(cookies.get('token') != 'none')
{
  return (
     <a style={{ color: 'white'}} >
            <Link to="/profile">
              Profile 
            </Link>
          </a>
    )
} else{
  return (
     <a style={{ color: 'white'}} >
            <Link to="/login">
              Login
            </Link>
          </a>

    )
}

      })()}

         


        </li>

   			</ul>
   		
   		
   		</div>
   	</div>
   </nav>
  

  );
 }


}

export default Header;
