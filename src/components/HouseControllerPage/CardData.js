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

                      <font  size="5">Temperature: 18*C</font>
                      <br></br>
                      <font  size="5">Air Dirty: 20%</font>

                 </div>
                 <div class="desktop_block_down">

          <Link to="/house-scenario">
                  <div type="button" id="button_card_data" class="btn btn-primary">Scenario</div>
          </Link>

          <Link to="/house-setup">
                  <div type="button" id="button_card_data" class="btn btn-primary">Setup</div> 
          </Link>
                  </div>
               </div>

    );
  }


}

export default CardData;
