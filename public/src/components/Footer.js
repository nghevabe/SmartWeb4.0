import React, { Component } from 'react';

class Footer extends Component{



 render(){

var foot =  {
  
   left: '0',
   bottom: '0',
   width: '100%',
   height: '100px',
   backgroundColor: '#343a40',
   color: 'white',
   marginTop: '100px',
   textAlign: 'center',
   paddingTop: '40px',
}


  return (
   
  <div style={foot}> 
  <p  >

  <font size="3">Copyright © Linh Tran 2020</font>
  
  </p>
  </div>
  

  );
 }


}

export default Footer;
