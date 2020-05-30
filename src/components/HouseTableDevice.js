//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../cardstyle.css'; 
import CardData from './CardData';
import CardHouseDevice from './CardHouseDevice';
import '../css/table_item.css';



class HouseTableDevice extends React.Component{

 render() {





    return (
     
      



<div class="row">

     <div class="column">

       <CardHouseDevice/>

     </div>


     <div class="column">

       <CardHouseDevice/>

     </div>


     <div class="column">

       <CardHouseDevice/>

     </div>

     <div class="column">

       <CardHouseDevice/>

     </div>

     <div class="column">

       <CardHouseDevice/>

     </div>

     <div class="column">

       <CardHouseDevice/>

     </div>


</div>



    );
  }


}

export default HouseTableDevice;
