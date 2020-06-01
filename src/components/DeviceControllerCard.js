//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import ControllerDevice from './ControllerDevice';
import '../css/card_house_device.css';



class DeviceControllerCard extends React.Component{

 render() {





    return (
      <div>
        
        <div class="card_house_device_controller">
       
     
                  <div  class="card_blockup">

                      <font  size="3">BedRoom Light</font>

                 </div>
                 <div class="card_blockdown">

                   <div type="button" id="card_button_left" class="btn btn-primary" >ON</div> 
                   <div type="button" id="card_button_right" class="btn btn-primary">OFF</div> 

                  </div>
              

 
</div>

      </div>
    );
  }


}

export default DeviceControllerCard;
