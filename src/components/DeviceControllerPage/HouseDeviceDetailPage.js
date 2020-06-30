import React, { Component } from 'react';
import HouseBackground from './HouseBackground';
import DeviceControllerCard from './DeviceControllerCard';
import '../../css/dot_color.css';

class HouseDeviceDetailPage extends Component{



 render(){


  return (

    <div>
   
   <div class="box_root">
   
   

  <div class="box_color">



  <button class="dot red"></button>

  <button class="dot green"></button>

  <button class="dot blue"></button>

  <button class="dot yellow"></button>

  <button class="dot violet"></button>

  <button class="dot aqua"></button>

  <button class="dot"></button>
  
  </div>
  </div>

  <DeviceControllerCard/>

  </div>

  );
 }


}

export default HouseDeviceDetailPage;
