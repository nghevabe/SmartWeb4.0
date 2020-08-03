import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Redirect, withRouter } from "react-router-dom";

import HouseDataCard from './HouseDataCard';
import HouseBackground from './HouseBackground';
import HouseTableDevice from './HouseTableDevice';



import Cookies from 'universal-cookie';

const cookies = new Cookies();


class HomePage extends Component{

constructor(props) {

    super(props);

  }


  componentDidMount() {

  	var stringToken = cookies.get('token')

  	if(stringToken != null){

  		if(stringToken.length < 20){

  			alert('You are not Login!')
  			this.props.history.push("/");
         //window.location.reload(false);
     }

 } else {
 	alert('You are not Login!')
 	this.props.history.push("/");
 }

}


 render(){


  return (
   
  <div>

 
  <HouseBackground/>
  <HouseDataCard/>
  <HouseTableDevice/>
  
  </div>
  );
 }


}

export default HomePage;
