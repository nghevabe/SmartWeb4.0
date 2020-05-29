import React, { Component } from 'react';


import HouseDataCard from '../components/HouseDataCard';
import HouseBackground from '../components/HouseBackground';


class HomePage extends Component{



 render(){


  return (
   
  <div>

  <HouseBackground/>
  <HouseDataCard/>
  
  </div>
  );
 }


}

export default HomePage;
