//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../cardstyle.css'; 
import '../css/card_house_device.css';
import img_avatar_card from '../image/img_avatar_card.png'



class CardHouseDevice extends React.Component{

 render() {

    return (
     

<div class="card">
  <img src={img_avatar_card}  width="80%"/>
  <div >
    <h4><b>Jane Doe</b></h4> 
    <p>Interior Designer</p> 
  </div>
</div>


    );
  }


}

export default CardHouseDevice;
