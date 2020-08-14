//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../../css/cardstyle.css'; 
import CardData from './CardData';
import CardHouseDevice from './CardHouseDevice';
import '../../css/table_item.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class HouseTableDevice extends React.Component{

   constructor(props) {
    super(props);
 
    this.state = {   

 lstDevice: [        

  { nodeId: 1, name: "Bed Room Light", type: "Light" },        

  { nodeId: 2, name: "Living Room Light", type: "Light" },        

  { nodeId: 3, name: "Kitchen Light", type: "Light" }, 

  { nodeId: 4, name: "Bed Room Fan", type: "Fan" },   

  { nodeId: 5, name: "Air System Fan", type: "Fan" },  

  { nodeId: 7, name: "Electro Glass", type: "Glass" },  

  { nodeId: 8, name: "Door", type: "Door" }        

],

       listDevice: [ ],
    };

  }

  componentDidMount() {

    const token = cookies.get('token')

    axios({
      method: 'get',
      url: 'http://localhost:8080/rest/house_devices',
      headers: {
        'Authorization': token
      }, 
    }).then(res => {
      var listItem = res.data;

      this.setState({
       listDevice: listItem
     })

    })

  }

 render() {

    return (
     
      <div>

      <div class="row">



      {this.state.listDevice.map(item => (

       <div class="column">

       <CardHouseDevice id_device={item.id} name_device={item.name} type_device={item.type}/>

       </div>

       ))}



      </div>

      </div>

    );
  }


}

export default HouseTableDevice;
