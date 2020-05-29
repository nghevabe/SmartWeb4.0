import React, { Component } from 'react';


import HouseDataCard from '../components/HouseDataCard';
import HouseBackground from '../components/HouseBackground';
import HouseTableDevice from '../components/HouseTableDevice';


class HomePage extends Component{



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
