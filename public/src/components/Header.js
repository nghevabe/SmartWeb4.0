import React, { Component } from 'react';

class Header extends Component{



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
   			<a class="navbar-brand" style={{ color: 'white'}} href="#">Home</a>
   		</div>
   
   	
   		<div class="collapse navbar-collapse navbar-ex1-collapse">
   			<ul class="nav navbar-nav">
   				<li><a style={{ color: 'white'}} href="#">Assistant</a></li>
   				<li><a style={{ color: 'white'}} href="#">House Controller</a></li>
   				<li><a style={{ color: 'white'}} href="#">Device Controller</a></li>
   			</ul>
   		
   		
   		</div>
   	</div>
   </nav>
  

  );
 }


}

export default Header;
