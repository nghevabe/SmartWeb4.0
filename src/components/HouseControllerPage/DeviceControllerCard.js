//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import ControllerDevice from './ControllerDevice';
import '../../css/card_house_device.css';




class DeviceControllerCard extends React.Component{

constructor(props) {

    super(props);

        const str = this.getQueryParameter('name');

    this.state = {
     
        value: this.getDecodeString(str)

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


 render() {


 //const query = new URLSearchParams(this.props.location.search);


    return (
      <div>
        <div class="card_house_device_controller">
       
     
                  <div  class="card_blockup">

                      <font  size="5">{this.state.value}</font>

                 </div>
                 <div class="card_blockdown">

                   <div type="button" id="card_button_left" class="btn btn-primary">ON</div> 
                   <div type="button" id="card_button_right" class="btn btn-primary">OFF</div> 

                  </div>
              

 
</div>

      </div>
    );
  }


}

export default DeviceControllerCard;
