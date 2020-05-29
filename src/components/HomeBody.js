import React, { Component } from 'react';
import icon_assistant from '../image/bot_icon.png'
import icon_house from '../image/house_icon.png'
import icon_device from '../image/device_icon.png'
import { BrowserRouter, Route, Link } from "react-router-dom";



class HomeBody extends Component{



 render(){

  var cardroot = {
  width: '80%',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '50px',  
}

 var cardhead = {

  padding: '10px',
  //height: '350px',
  border: '1px solid #e2e2e2',

  
}

 var cardfoot = {

 
  width: 'auto',
  paddingTop: '10px',
  paddingBottom: '10px',
  paddingLeft: '30%',
  paddingRight: '30%', 
  marginLeft: 'auto',
  marginRight: 'auto',
  border: '1px solid #e2e2e2',

  
}

var cardimage = {

  width: '100%',
  height: '115px',
  paddingTop: '30px',

 

}

var cardbutton = {

  width: '100%',
  marginLeft: 'auto',
  backgroundColor: "#008577",

}

var image1 = {

  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  

}

var texter = {

   textAlign: 'center',
  

}


  return (

    <div style={{marginTop:'80px'}} class="w3-row-padding">

  <div class="w3-third">

   <div style={cardroot} class="card h-100">

          <div style={cardhead} class="card-body">

            <div style={cardimage}>
               <img style={image1}  src={icon_assistant} alt={icon_assistant} width="50px" height="50px"/>
           </div>

           <div style={texter}>
            <h4 class="card-title">Virtual Assistant</h4>
           </div>

           <div style={texter}>
             <p class="card-text"> Support Vietnamese language, Command to control electric device in your house. Look for information. And many other features. </p>
           </div>

          </div>

          <div style={cardfoot} class="card-footer">
             <div >

             <Link to="/assistant">

            <div style={cardbutton} type="button" class="btn btn-primary">
            More
            </div>

            </Link>

            </div>
          </div>

        </div>

  </div>

  <div class="w3-third">

   <div style={cardroot} class="card h-100">
          <div style={cardhead} class="card-body">
             <div style={cardimage}>
               <img style={image1}  src={icon_house} alt={icon_house} width="50px" height="50px"/>
           </div>

               <div style={texter}>
            <h4 class="card-title">House Controller</h4>
           </div>

           <div style={texter}>
             <p class="card-text"> Control the systems and electronics in your home. Monitor and receive data from the sensor system. You must be login to use this function </p>
           </div>

           
          </div>
            <div style={cardfoot} class="card-footer">
             <div >

 <Link to="/house">
            <div style={cardbutton} type="button" class="btn btn-primary">More</div>
 </Link>

            </div>
          </div>
        </div>

  </div>

  <div class="w3-third">

   <div style={cardroot} class="card h-100">
          <div style={cardhead} class="card-body">

           <div style={cardimage}>
               <img style={image1}  src={icon_device} alt={icon_device} width="50px" height="50px"/>
           </div>

        
           <div style={texter}>
            <h4 class="card-title">Device Controller</h4>
           </div>

           <div style={texter}>
             <p class="card-text">  Control removable devices such as LEDs, smart sockets To use this function, you must first use a smartphone to connect to the device </p>
           </div>

           
          </div>
            <div style={cardfoot} class="card-footer">
             <div >
            <div style={cardbutton} type="button" class="btn btn-primary">More</div>
            </div>
          </div>
        </div>

  </div>

</div>

  );
 }


}

export default HomeBody;
