import React, { Fragment } from 'react';
import Media from 'react-media';
import introduce_image from '../image/introduce_image.png';

class ImageIntroduce extends React.Component{

 

 render(){

var imageintro_desktop = {
  width: '60%',
  height: 'auto',
  display: 'block',
  marginTop: '-80vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  };

var imageintro_tablet = {
  width: '70%',
  height: 'auto',
  display: 'block',
  marginTop: '-80vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  };

var imageintro_phone = {
  width: '80%',
  height: 'auto',
  display: 'block',
  marginTop: '-65vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  };





  return (


  
  
  


 <div>

        <Media queries={{
          imageintro_phone: "(max-width:  600px)",
          imageintro_tablet: "(min-width:  601px) and (max-width: 1024px)",
          imageintro_desktop: "(min-width: 1025px)",
        }}>
          {matches => (
            <Fragment>

               {matches.imageintro_phone
               && 
                 <div>

                     <img style={imageintro_phone}  src={introduce_image} alt={introduce_image}  />
     
                </div>

             }

             {matches.imageintro_tablet
               && 
                 <div>

                     <img style={imageintro_tablet}  src={introduce_image} alt={introduce_image}  />
     
                </div>

             }
      


              {matches.imageintro_desktop
               && 
                 <div>

                     <img style={imageintro_desktop}  src={introduce_image} alt={introduce_image}  />
     
                </div>

             }
            </Fragment>
          )}
        </Media>
       </div>
  


  );
 }


}

export default ImageIntroduce;
