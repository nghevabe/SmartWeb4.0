//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/card_scenario.css'; 
import home_image from '../../image/home_image.png'
import { BrowserRouter, Route, Link } from "react-router-dom";


class ScenarioBody extends React.Component{

 render() {

    return (
        
         
 
    	<div  class="row_scenario">

    	    <div  class="column_scenario">

    	         <div  class="w3-card-4">

    	         <header id="header_scenario" class="w3-container">
    	         <h3>Welcome</h3>
    	         </header>

    	         <div  class="container_scenario">
    
    	         <p>Use when guests come to the house. The living room lights and door will automatically open</p>
    	         </div>

    	         <button id="btn_scenario" class="w3-button w3-block"> Active </button>

    	         </div>

    	     </div>


    	 <div class="column_scenario">

    	         

    	           <div  class="w3-card-4">

    	         <header id="header_scenario" class="w3-container">
    	         <h3>Relax</h3>
    	         </header>

    	         <div  class="container_scenario">
    
    	         <p>Moderate lighting system,accompanied by music turned on to create a sense of relaxation</p>
    	         </div>

    	         <button id="btn_scenario" class="w3-button w3-block"> Active </button>

    	         </div>

    	  

    	     </div>



    	 <div class="column_scenario">

    	      

    	         <div  class="w3-card-4">

    	         <header id="header_scenario" class="w3-container">
    	         <h3>Sleeping</h3>
    	         </header>

    	         <div  class="container_scenario">
    
    	         <p> Safe mode is set, the bedroom lights have a brightness that gradually reduces the feeling of falling asleep </p>
    	         </div>

    	         <button id="btn_scenario" class="w3-button w3-block"> Active </button>

    	         </div>

    	     </div>



    	</div>
  

    );
  }


}

export default ScenarioBody;
