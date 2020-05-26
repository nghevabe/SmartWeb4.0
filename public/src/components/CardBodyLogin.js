//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../cardstyle.css'; 
import home_image from '../image/home_image.png'


class CardBodyLogin extends React.Component{

 render() {


  var card_phone_medium_landscape = {
  width: '80%',
  height: '150px',
  marginTop: '-75px',
  marginBottom: '10px',
}

var card_tablet_medium_vertical = {
  width: '50%',
  height: '160px',
  marginTop: '-80px',
  marginBottom: '120px',
}

var card_tablet_medium_landscape = {
  width: '50%',
  height: '200px',
  marginTop: '-95px',
  marginBottom: '120px',
}

var card_tablet_large_landscape = {
  width: '40%',
  height: '200px',
  marginTop: '-100px',
  marginBottom: '120px',
}

var desktop_block_up = {
  width: '100%',
  height: '120px',
  textAlign: 'center',
  paddingTop: '10px',
  color: '#008577',
  
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

var button_login_phonemedium_landscape = {
  backgroundColor: "#008577", 
  width:'35%',
  height: '40px',
  marginTop:'-30px',
  marginRight:'50px',
  textAlign: 'center',
  padding:'8px',
}


var button_resister_phonemedium_landscape = {
  backgroundColor: "white",
  color:'black', 
  border: '1px solid black', 
  width:'35%',
  height: '40px',
  marginTop:'-30px',
  padding:'8px',
}

//


//

var button_login_tabletmedium_vertical = {
  backgroundColor: "#008577", 
  width:'35%',
  height: '40px',
  marginTop:'-10px',
  marginRight:'50px',
  textAlign: 'center',
  padding:'8px',
}


var button_resister_tabletmedium_vertical = {
  backgroundColor: "white",
  color:'black', 
  border: '1px solid black', 
  width:'35%',
  height: '40px',
  marginTop:'-10px',
  padding:'8px',
}

//

var button_login_tabletmedium_landscape = {
  backgroundColor: "#008577", 
  width:'35%',
  height: '40px',
  marginTop:'20px',
  marginRight:'50px',
  textAlign: 'center',
  padding:'8px',
}


var button_resister_tabletmedium_landscape = {
  backgroundColor: "white",
  color:'black', 
  border: '1px solid black', 
  width:'35%',
  height: '40px',
  marginTop:'20px',
  padding:'8px',
}

var button_login_tabletlarge_landscape = {
  backgroundColor: "#008577", 
  width:'35%',
  height: '40px',
  marginTop:'20px',
  marginRight:'50px',
  textAlign: 'center',
  padding:'8px',
}


var button_resister_tabletlarge_landscape = {
  backgroundColor: "white",
  color:'black', 
  border: '1px solid black', 
  width:'35%',
  height: '40px',
  marginTop:'20px',
  padding:'8px',
}


var button_login_desktop = {
  backgroundColor: "#008577", 
  width:'38%',
  height: '50px',
  marginTop:'50px',
  marginRight:'50px',
  textAlign: 'center',
  padding:'12px',
}

var button_resister_desktop = {
  backgroundColor: "white",
  color:'black', 
  border: '1px solid black', 
  width:'38%',
  height: '50px',
  marginTop:'50px',
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

                      <font  size="4">Welcome Iot Smart Web</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_login_phonemedium_landscape } class="btn btn-primary">Login</div> 
                  <div type="button" style={button_resister_phonemedium_landscape } class="btn btn-primary">Register</div> 

                  </div>
               </div>

             }
               

              {matches.tablet_medium_vertical
               && 
                <div >  
                  <div style={desktop_block_up} >

                      <font  size="4">Welcome Iot Smart Web</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_login_tabletmedium_vertical } class="btn btn-primary">Login</div> 
                  <div type="button" style={button_resister_tabletmedium_vertical } class="btn btn-primary">Register</div> 

                  </div>
               </div>

             }


              {matches.tablet_medium_landscape
               && 
                 <div >  
                  <div style={desktop_block_up} >

                      <font  size="5">Welcome Iot Smart Web</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_login_tabletmedium_landscape } class="btn btn-primary">Login</div> 
                  <div type="button" style={button_resister_tabletmedium_landscape } class="btn btn-primary">Register</div> 

                  </div>
               </div>
             }

              {matches.tablet_large_landscape
               &&
               <div >  
                  <div style={desktop_block_up} >

                      <font  size="5">Welcome Iot Smart Web</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_login_tabletlarge_landscape } class="btn btn-primary">Login</div> 
                  <div type="button" style={button_resister_tabletlarge_landscape } class="btn btn-primary">Register</div> 

                  </div>
               </div>

              }


              {matches.desktop
               && 
               <div >  
                  <div style={desktop_block_up} >

                      <font  size="5">Welcome Iot Smart Web</font>

                 </div>
                 <div style={desktop_block_down}>

                  <div type="button" style={button_login_desktop} class="btn btn-primary">Login</div> 
                  <div type="button" style={button_resister_desktop} class="btn btn-primary">Register</div> 

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

export default CardBodyLogin;
