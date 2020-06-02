import React, { Component } from 'react';


import HomeBackground from './HomeBackground';
import HomeBody from './HomeBody';
import HomeBodyImage from './HomeBodyImage';
import ImageIntroduce from './ImageIntroduce';

class HomePage extends Component{



 render(){

var head = {

  width: 'auto',
  marginLeft: '0px',
  marginRight: '-1px',
  backgroundColor: "#008577",
  border: '1px solid #008577',
  marginBottom: '-1px',
  zIndex: '2',
  };


  return (
   
  <div>
  <HomeBackground/>
  <ImageIntroduce/>

  <HomeBodyImage/>

  <HomeBody/>
  </div>
  );
 }


}

export default HomePage;
