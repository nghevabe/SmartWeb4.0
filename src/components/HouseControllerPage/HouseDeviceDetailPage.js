import React, { Component } from 'react';
import HouseBackground from './HouseBackground';
import DeviceControllerCard from './DeviceControllerCard';
import '../../css/dot_color.css';
import '../../css/seek_bar.css';

import { Configs } from '../../common/Configs';
import Cookies from 'universal-cookie';

import axios from 'axios';

const cookies = new Cookies();
const token = cookies.get('token')

// http://localhost:3000/house-detail-device?id=505&name=LED%20Bed%20Room&type=Light

class HouseDeviceDetailPage extends Component{

constructor(props) {

    super(props);

        const parameterName = this.getQueryParameter('name');

    this.state = {
        valueName: this.getDecodeString(parameterName),
        valueType: this.getQueryParameter('type'),
        valueId: this.getQueryParameter('id'),
    };

    this.valueSignal = "ON";
    this.valueColor = "RED";
    this.valuePower = 50;

    this.getQueryParameter = this.getQueryParameter.bind(this);
    this.getDecodeString = this.getDecodeString.bind(this);

    this.turnRedLight = this.turnRedLight.bind(this);
    this.turnGreenLight = this.turnGreenLight.bind(this);
    this.turnBlueLight = this.turnBlueLight.bind(this);
    this.turnYellowLight = this.turnYellowLight.bind(this);
    this.turnVioletLight = this.turnVioletLight.bind(this);
    this.turnAquaLight = this.turnAquaLight.bind(this);
    this.turnWhiteLight = this.turnWhiteLight.bind(this);
    this.turnOn = this.turnOn.bind(this);
    this.turnOff = this.turnOff.bind(this);

  }



   getQueryParameter(variable)
{
        var query = window.location.search.substring(1);
        //"app=article&act=news_content&aid=160990"
        
        var vars = query.split("&");
        console.log(vars) //[ 'app=article', 'act=news_content', 'aid=160990' ]
        for (var i=0;i<vars.length;i++) {
                    var pair = vars[i].split("=");
                    console.log(pair)//[ 'app', 'article' ][ 'act', 'news_content' ][ 'aid', '160990' ] 
        if(pair[0] == variable){return pair[1];}
         }
         return(false);    
}

    getDecodeString(str)
    {

       var vars = str.split("%20");
       var chuoi = "";

       for (var i=0;i<vars.length;i++) 
         {
                    chuoi += vars[i] + " ";
                    
         }
         
         return chuoi;
    }


        publishMessage = () => {

           axios({
        		method: 'post',
        		url: Configs.api+'rest/publish_signal/'+this.state.valueId+'?signal=' + this.valueSignal 
        		+ "&lightColor=" + this.valueColor+"&power="+this.valuePower,
        		headers: {
               'Authorization': token
            }, 
        	}).then(res => {
        		alert(this.valueSignal)
        	})
        	.catch(e =>{ 
        		if(e.response) {
               alert("FAIL")
        		}
        	})

        }

        turnOn() {
        	this.valueSignal = "ON"
        	this.valueColor = "WHITE"
        	this.valuePower = 100
        	this.publishMessage()
        }


       turnOff() {
    	    this.valueSignal = "OFF"
        	this.valueColor = "WHITE"
        	this.valuePower = 100
        	this.publishMessage()
       }

      turnRedLight() {
           this.valueSignal = "ON"
        	 this.valueColor = "RED"
        	 this.valuePower = 100
        	 this.publishMessage()

           this.setState({
           lightColor :'#f15f66',
           border : '2px solid #f15f66'
         });
      }

      turnGreenLight() {
        this.valueSignal = "ON"
        this.valueColor = "GREEN"
        this.valuePower = 100
        this.publishMessage()

        this.setState({
           lightColor :'#51ffa9',
           border : '2px solid #51ffa9'
         });
      }

      turnBlueLight() {
        this.valueSignal = "ON"
        this.valueColor = "BLUE"
        this.valuePower = 100
        this.publishMessage()

        this.setState({
           lightColor :'#3380cb',
           border : '2px solid #3380cb'
         });
      }

      turnYellowLight() {
        this.valueSignal = "ON"
        this.valueColor = "YELLOW"
        this.valuePower = 100
        this.publishMessage()

        this.setState({
           lightColor :'#ffba51',
           border : '2px solid #ffba51'
         });
      }

      turnVioletLight() {
        this.valueSignal = "ON"
        this.valueColor = "VIOLET"
        this.valuePower = 100
        this.publishMessage()

        this.setState({
           lightColor :'#cc33ff',
           border : '2px solid #cc33ff'
         });
      }

      turnAquaLight() {
        this.valueSignal = "ON"
        this.valueColor = "AQUA"
        this.valuePower = 100
        this.publishMessage()

        this.setState({
           lightColor :'#a8d4ff',
           border : '2px solid #a8d4ff'
         });
      }

      turnWhiteLight() {
        this.valueSignal = "ON"
        this.valueColor = "WHITE"
        this.valuePower = 100
        this.publishMessage()

        this.setState({
           lightColor :'white',
           border : '2px solid white'
         });
      }

 render(){


  return (

    <div>
   
   <div style={{backgroundColor: this.state.lightColor, border: this.state.border}} class="box_root">
   
    {(() => {
               //alert(this.state.valueType)

        if (this.state.valueType == "Light") {

          return (
              <div class="box_color">
                <button class="dot red" onClick={this.turnRedLight}></button>
                <button class="dot green" onClick={this.turnGreenLight}></button>
                <button class="dot blue" onClick={this.turnBlueLight}></button>
                <button class="dot yellow" onClick={this.turnYellowLight}></button>
                <button class="dot violet" onClick={this.turnVioletLight}></button>
                <button class="dot aqua" onClick={this.turnAquaLight}></button>
                <button class="dot white" onClick={this.turnWhiteLight}></button>
              </div>
          )

        } 

          if (this.state.valueType == "Fan") {

          return (
             <div class="slider_container">
               <input type="range" min="1" max="100"  class="slider" />
             </div>
          )

        } 

         if (this.state.valueType == "Purifier") {

          return (
             <div class="slider_container">
               <input type="range" min="1" max="100"  class="slider" />
             </div>
          )

        } 

        if (this.state.valueType == "Glass") {

          return (
             <div class="slider_container">
               <input type="range" min="1" max="100"  class="slider" />
             </div>
          )

        } 


        if (this.state.valueType == "Door") {

          return (
             <div class="slider_container">
               <input type="range" min="1" max="100"  class="slider" />
             </div>
          )

        } 

      })()}

  </div>


  <div class="card_house_device_controller">
      
      
      <div  class="card_blockup">

      <font  size="5">{this.state.valueName}</font>

      </div>
      <div class="card_blockdown">

      <div  id="card_button_left" class="btn btn-primary" onClick={this.turnOn}>ON</div> 
      <div  id="card_button_right"  class="btn btn-primary" onClick={this.turnOff}>OFF</div> 

      </div>
      
      
      </div>

  </div>

  );
 }


}

export default HouseDeviceDetailPage;
