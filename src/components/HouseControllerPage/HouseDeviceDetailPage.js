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
        valueType: this.getQueryParameter('type')

    };

    this.getQueryParameter = this.getQueryParameter.bind(this);
    this.getDecodeString = this.getDecodeString.bind(this);
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

 render(){


  return (

    <div>
   
   <div class="box_root">
   
    {(() => {
               //alert(this.state.valueType)

        if (this.state.valueType == "light") {

          return (
              <div class="box_color">
                <button class="dot red"></button>
                <button class="dot green"></button>
                <button class="dot blue"></button>
                <button class="dot yellow"></button>
                <button class="dot violet"></button>
                <button class="dot aqua"></button>
                <button class="dot"></button>
              </div>
          )

        } 

          if (this.state.valueType == "fan") {

          return (
             <div class="slider_container">
               <input type="range" min="1" max="100"  class="slider" />
             </div>
          )

        } 


        if (this.state.valueType == "glass") {

          return (
             <div class="slider_container">
               <input type="range" min="1" max="100"  class="slider" />
             </div>
          )

        } 


        if (this.state.valueType == "door") {

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
