import React, { Component } from 'react';
import Header from '../Commons/Header';

class ScenarioBackground extends Component{


 render(){

var bodyhead = {
  height: '30vh',
  width: 'auto',
  marginTop: '-20px',
  marginLeft: '1px',
  marginRight: '0px',
  textAlign: 'center',
  padding: '70px 0',
  color: 'white',
  backgroundColor: "#008577",

  };



  return (

  
   <div style={bodyhead}>

         <h3>Choose Your Scenario</h3>
  
  </div>



  );
 }


}

export default ScenarioBackground;
