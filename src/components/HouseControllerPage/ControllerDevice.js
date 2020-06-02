//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../../css/cardstyle.css'; 
import home_image from '../../image/home_image.png'


class ControllerDevice extends React.Component{

 render() {


 

var desktop_block_up = {
  width: '100%',
  height: '120px',
  textAlign: 'center',
  paddingTop: '10px',
  color: '#737373',
  
}

var desktop_block_down = {
  width: '100%',
  height: '120px',
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center',
}

//

var button_login_phonemedium_vertical = {
  backgroundColor: "#008577", 
  width:'35%',
  height: '40px',
  marginTop:'-60px',
  marginRight:'50px',
  textAlign: 'center',
  padding:'8px',
}


var button_resister_phonemedium_vertical = {
  backgroundColor: "white",
  color:'black', 
  border: '1px solid black', 
  width:'35%',
  height: '40px',
  marginTop:'-60px',
  padding:'8px',
}

//



//

var button_phonemedium_landscape = {
  backgroundColor: "white",
  color:'#008577', 
  border: '1px solid #008577', 
  width:'38%',
  height: '40px',
  marginTop:'-25px',
  marginLeft:'10px',
  marginRight:'10px',
  padding:'12px',
}

//

var button_tabletmedium_vertical = {
  backgroundColor: "white",
  color:'#008577', 
  border: '1px solid #008577', 
  width:'38%',
  height: '40px',
  marginTop:'-5px',
  marginLeft:'10px',
  marginRight:'10px',
  padding:'12px',
}

var button_tabletmedium_landscape = {
  backgroundColor: "white",
  color:'#008577', 
  border: '1px solid #008577', 
  width:'38%',
  height: '40px',
  marginTop:'20px',
  marginLeft:'10px',
  marginRight:'10px',
  padding:'12px',
}

var button_tabletlarge_landscape = {
  backgroundColor: "white",
  color:'#008577', 
  border: '1px solid #008577', 
  width:'38%',
  height: '50px',
  marginTop:'0px',
  marginLeft:'10px',
  marginRight:'10px',
  padding:'12px',
}

var button_desktop = {
  backgroundColor: "white",
  color:'#008577', 
  border: '1px solid #008577', 
  width:'38%',
  height: '50px',
  marginTop:'50px',
  marginLeft:'10px',
  marginRight:'10px',
  padding:'12px',
}




    return (
      <div>

        <Media queries={{
          phone_medium_vertical: "(max-width:  320px)",
          phone_medium_landscape: "(min-width: 321px) and (max-width:  480px)",
          tablet_medium_vertical: "(min-width: 481px) and (max-width:  600px)",
          tablet_medium_landscape: "(min-width: 601px) and (max-width:  800px)",
          tablet_large_landscape: "(min-width:  801px) and (max-width: 1024px)",
          desktop: "(min-width: 1025px)"
        }}>
          {matches => (
            <Fragment>
              {matches.phone_medium_vertical
               &&

                <div >  
                  <div style={desktop_block_up} >

                      <font  size="3">Welcome Iot Smart Web</font>

                 </div>
                 <div style={desktop_block_down}>

                   <div type="button" style={button_login_phonemedium_vertical } class="btn btn-primary">Login</div> 
                   <div type="button" style={button_resister_phonemedium_vertical } class="btn btn-primary">Register</div> 

                  </div>
               </div>

             
             }
              {matches.phone_medium_landscape
               && 
                <div >  
                  <div style={desktop_block_up} >

                       <font  size="3">Temperature: 18*C</font>
                      <br></br>
                      <font  size="3">Air Dirty: 20%</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_phonemedium_landscape } class="btn btn-primary">ON</div> 
                  <div type="button" style={button_phonemedium_landscape } class="btn btn-primary">OFF</div> 

                  </div>
               </div>

             }
               

              {matches.tablet_medium_vertical
               && 
                <div >  
                  <div style={desktop_block_up} >

                      <font  size="4">Temperature: 18*C</font>
                      <br></br>
                      <font  size="4">Air Dirty: 20%</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_tabletmedium_vertical } class="btn btn-primary">ON</div> 
                  <div type="button" style={button_tabletmedium_vertical } class="btn btn-primary">OFF</div> 

                  </div>
               </div>

             }


              {matches.tablet_medium_landscape
               && 
                 <div >  
                  <div style={desktop_block_up} >

                      <font  size="4">Temperature: 18*C</font>
                      <br></br>
                      <font  size="4">Air Dirty: 20%</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_tabletmedium_landscape } class="btn btn-primary">ON</div> 
                  <div type="button" style={button_tabletmedium_landscape } class="btn btn-primary">OFF</div> 

                  </div>
               </div>
             }

              {matches.tablet_large_landscape
               &&
               <div >  
                  <div style={desktop_block_up} >

                      <font  size="5">Temperature: 18*C</font>
                      <br></br>
                      <font  size="5">Air Dirty: 20%</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_tabletlarge_landscape } class="btn btn-primary">ON</div> 
                  <div type="button" style={button_tabletlarge_landscape } class="btn btn-primary">OFF</div> 

                  </div>
               </div>

              }


              {matches.desktop
               && 
               <div >  
                  <div style={desktop_block_up} >

                      <font  size="5">Bedroom Light</font>
                      <br></br>
                      <font  size="5">Aqua</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_desktop} class="btn btn-primary">ON</div> 
                  <div type="button" style={button_desktop} class="btn btn-primary">OFF</div> 

                  </div>
               </div>

             }
            </Fragment>
          )}
        </Media>
       </div>
         
     
    );
  }


}

export default ControllerDevice;
