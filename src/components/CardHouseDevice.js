//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../cardstyle.css'; 
import '../css/card_house_device.css';
import img_avatar_card from '../image/img_avatar_card.png'
import img_led_icon from '../image/led_icon.png'
import { BrowserRouter, Route, Link } from "react-router-dom";
import HouseDeviceDetailPage from '../components/HouseDeviceDetailPage';



class CardHouseDevice extends React.Component{

 render() {

    return (
     
<Link to="/housedetaildevice">
<div class="card_house_device">
  <img src={img_led_icon}  width="50%"/>


  
                    
  <div >
    <h4 ><b>Bedroom Light</b></h4> 
    <p>OFF</p> 
  </div>

 
</div>
</Link>

    );
  }


}

export default CardHouseDevice;
