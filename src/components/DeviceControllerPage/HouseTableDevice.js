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
  { nodeId: 1, name: "Led Esp 1", type: "light_device" },        
  { nodeId: 2, name: "Led Esp 2", type: "light_device" },        
  { nodeId: 3, name: "Led Esp 3", type: "light_device" }, 
  { nodeId: 4, name: "Led Esp 4", type: "light_device" }, 
 
],

    };
  }

 render() {





    return (
     
      
 


<div class="row">

    {this.state.lstDevice.map(item => (

             <div class="column">
             
                  <CardHouseDevice id_device={item.nodeId} name_device={item.name} type_device={item.type}/>

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
