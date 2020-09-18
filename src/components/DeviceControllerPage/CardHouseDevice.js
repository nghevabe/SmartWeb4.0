//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../../css/cardstyle.css'; 
import '../../css/card_house_device.css';
import img_avatar_card from '../../image/img_avatar_card.png'
import img_led_icon from '../../image/led_icon.png'
import img_fan_icon from '../../image/fan_icon.png'
import img_glass_icon from '../../image/glass_icon.png'
import img_door_icon from '../../image/door_icon.png'

import { BrowserRouter, Route, Link } from "react-router-dom";
import HouseDeviceDetailPage from './HouseDeviceDetailPage';



class CardHouseDevice extends React.Component{

 render() {

    return (
     
<Link to={"house-detail-device?id="+this.props.id_device+"&name="+this.props.name_device+"&type="+this.props.type_device}>
<div class="card_house_device">
 

 <div>

      {(() => {


        if (this.props.type_device == "light_device") {

          return (
             <img src={img_led_icon}  width="50%"/>
          )

        } 

      

      })()}

 </div>
  
                    
  <div >
    <h4 ><b>{this.props.name_device}</b></h4> 
    <p>OFF</p> 
  </div>

 
</div>
</Link>

    );
  }


}

export default CardHouseDevice;
