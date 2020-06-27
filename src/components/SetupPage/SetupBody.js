//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import  '../../css/card_setup.css'; 
import home_image from '../../image/home_image.png'
import { BrowserRouter, Route, Link } from "react-router-dom";
import SetupBackground from './SetupBackground';


class SetupBody extends React.Component{

 render() {

    return (
        
         <div>
         <SetupBackground/>
 
    	<div  class="row_setup">

    	    <div  class="column_setup">

    	         <div  class="w3-card-4">

    	         <header id="header_setup" class="w3-container">
    	         <h3>Power Saver</h3>
    	         </header>

    	         <div  class="container_setup">
    
    	         <p>Lights in the room will turn on every time someone enters the room. And will turn off when no one else</p>
    	         </div>

    	         <button id="btn_setup" class="w3-button w3-block"> Active </button>

    	         </div>

    	     </div>


    	 <div class="column_setup">

    	         

    	           <div  class="w3-card-4">

    	         <header id="header_setup" class="w3-container">
    	         <h3>Smart Air Filter</h3>
    	         </header>

    	         <div  class="container_setup">
    
    	         <p>Automatically turn on the air filtration system when the air in the room reaches the warning level</p>
    	         </div>

    	         <button id="btn_setup" class="w3-button w3-block"> Active </button>

    	         </div>

    	  

    	     </div>



    	 <div class="column_setup">

    	      

    	         <div  class="w3-card-4">

    	         <header id="header_setup" class="w3-container">
    	         <h3>Light Control</h3>
    	         </header>

    	         <div  class="container_setup">
    
    	         <p> Automatically adjusts the transparency of the glass panels to suit outdoor lighting conditions </p>
    	         </div>

    	         <button id="btn_setup" class="w3-button w3-block"> Active </button>

    	         </div>

    	     </div>



    	</div>
  </div>

    );
  }


}

export default SetupBody;
