import React, { Component } from 'react';


import HouseDataCard from './HouseDataCard';
import HouseBackground from './HouseBackground';
import HouseTableDevice from './HouseTableDevice';


class DevicePage extends Component{



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

export default DevicePage;
