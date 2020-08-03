import React, { Component } from 'react';
import HouseBackground from './HouseBackground';
import DeviceControllerCard from './DeviceControllerCard';
import '../../css/dot_color.css';
import '../../css/seek_bar.css';

class HouseDeviceDetailPage extends Component{

constructor(props) {

    super(props);

        const parameterName = this.getQueryParameter('name');

    this.state = {
        valueName: this.getDecodeString(parameterName),
        valueType: this.getQueryParameter('type'),
    };

    this.getQueryParameter = this.getQueryParameter.bind(this);
    this.getDecodeString = this.getDecodeString.bind(this);

    this.turnRedLight = this.turnRedLight.bind(this);
    this.turnGreenLight = this.turnGreenLight.bind(this);
    this.turnBlueLight = this.turnBlueLight.bind(this);
    this.turnYellowLight = this.turnYellowLight.bind(this);
    this.turnVioletLight = this.turnVioletLight.bind(this);
    this.turnAquaLight = this.turnAquaLight.bind(this);
    this.turnWhiteLight = this.turnWhiteLight.bind(this);
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

      turnRedLight() {
           this.setState({
           lightColor :'#f15f66',
           border : '2px solid #f15f66'
         });
      }

      turnGreenLight() {
        this.setState({
           lightColor :'#51ffa9',
           border : '2px solid #51ffa9'
         });
      }

      turnBlueLight() {
        this.setState({
           lightColor :'#3380cb',
           border : '2px solid #3380cb'
         });
      }

      turnYellowLight() {
        this.setState({
           lightColor :'#ffba51',
           border : '2px solid #ffba51'
         });
      }

      turnVioletLight() {
        this.setState({
           lightColor :'#cc33ff',
           border : '2px solid #cc33ff'
         });
      }

      turnAquaLight() {
        this.setState({
           lightColor :'#a8d4ff',
           border : '2px solid #a8d4ff'
         });
      }

      turnWhiteLight() {
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



  <DeviceControllerCard nameDevice={this.state.valueName}/>

  </div>

  );
 }


}

export default HouseDeviceDetailPage;
