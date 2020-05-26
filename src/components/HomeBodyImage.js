//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import styles from '../cardstyle.css'; 
import home_image from '../image/home_image.png'

class HomeBodyImage extends React.Component{

 render() {



var image1 = {

  
  display: 'block',
  marginTop: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  

}

var textcontend = {

  marginTop: '40px',
  textAlign: 'center',

  

}

var vertical = {

  display: 'block',
  marginTop: '300px',
  marginLeft: 'auto',
  marginRight: 'auto',

}


var standby = {

  display: 'block',
  marginTop: '200px',
  marginLeft: 'auto',
  marginRight: 'auto',

}



    return (

           <div>

        <Media queries={{
          vertical: "(max-width:  600px)",
          standby: "(min-width:  601px)"
        }}>
          {matches => (
            <Fragment>
              {matches.vertical
               &&
                <div>
                 <img style={vertical}  src={home_image} alt={home_image} width="90%" />
                 <div style={textcontend}> <p style={{fontSize:'25px'}}> Support multi-platform Ecosystem </p> </div>
               </div>
             }
      


              {matches.standby
               && 
                <div>
                  <img style={standby}  src={home_image} alt={home_image} width="90%" />
                  <div style={textcontend}> <p style={{fontSize:'25px'}}> Support multi-platform Ecosystem </p> </div>
                </div>

             }
            </Fragment>
          )}
        </Media>
       </div>

    
    );
  }


}

export default HomeBodyImage;
