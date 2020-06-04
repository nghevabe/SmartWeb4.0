//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../../css/cardstyle.css'; 
import CardData from './CardData';
import CardHouseDevice from './CardHouseDevice';
import '../../css/table_item.css';



class HouseTableDevice extends React.Component{

   constructor(props) {
    super(props);
 
    this.state = {
     
        lstDevice: [        
  { nodeId: 1, name: "Bed Room Light", type: "light" },        
  { nodeId: 2, name: "Living Room Light", type: "light" },        
  { nodeId: 3, name: "Kitchen Light", type: "light" }, 
  { nodeId: 4, name: "Bed Room Fan", type: "fan" },   
  { nodeId: 5, name: "Air System Fan", type: "fan" },  
  { nodeId: 7, name: "Electro Glass", type: "glass" },  
  { nodeId: 8, name: "Door", type: "door" }        
],

    };
  }

 render() {





    return (
     
      
 


<div class="row">

    {this.state.lstDevice.map(item => (

             <div class="column">
             

                  <CardHouseDevice name_device={item.name} type_device={item.type}/>

            </div>

          ))}
   

{/* 
   <div class="column">

       <CardHouseDevice/>

     </div>


     <div class="column">

       <CardHouseDevice/>

     </div>


     <div class="column">

       <CardHouseDevice/>

     </div>

     <div class="column">

       <CardHouseDevice/>

     </div>

     <div class="column">

       <CardHouseDevice/>

     </div>

     <div class="column">

       <CardHouseDevice/>

     </div>
*/}  

</div>



    );
  }


}

export default HouseTableDevice;
