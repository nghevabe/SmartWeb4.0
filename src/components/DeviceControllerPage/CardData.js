//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../../css/cardstyle.css'; 
import styles2 from '../../css/card_house_data.css';
import home_image from '../../image/home_image.png'
import { BrowserRouter, Route, Link } from "react-router-dom";


class CardData extends React.Component{

 render() {

    return (
        
          <div >  
                <div class="desktop_block_up" >

                      <font  size="5">Connected Devices</font>
                      <br></br>
                      <font  size="5">4</font>

                 </div>
                 <div class="desktop_block_down">

          <Link to="/add-device">
                  <div type="button" id="button_card_data" class="btn btn-primary">Add Device</div>
          </Link>
                  </div>
               </div>

    );
  }


}

export default CardData;
