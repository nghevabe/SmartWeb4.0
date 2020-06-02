//import React, { Component } from 'react';
import React, { Fragment } from 'react';
import Media from 'react-media';
import CardData from './CardData';
import '../../css/cardstyle.css';



class HouseDataCard extends React.Component{

 render() {

var card_phone_medium_vertical = {
  width: '80%',
  height: '130px',
  marginTop: '-65px',
  marginBottom: '10px',
}

var card_phone_medium_landscape = {
  width: '80%',
  height: '150px',
  marginTop: '-75px',
  marginBottom: '10px',
}

var card_tablet_medium_vertical = {
  width: '70%',
  height: '180px',
  marginTop: '-80px',
  marginBottom: '120px',
}

var card_tablet_medium_landscape = {
  width: '60%',
  height: '200px',
  marginTop: '-95px',
  marginBottom: '120px',
}

var card_tablet_large_landscape = {
  width: '50%',
  height: '200px',
  marginTop: '-100px',
  marginBottom: '120px',
}

var desktop = {
  width: '40%',
  height: '250px',
  marginTop: '-120px',
  marginBottom: '50px',
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
                <div style={card_phone_medium_vertical} className="cardHome">  
               <CardData/>
               </div>
             }
              {matches.phone_medium_landscape
               && 
               <div style={card_phone_medium_landscape} className="cardHome">  
               <CardData/>
               </div>

             }
               

              {matches.tablet_medium_vertical
               && 
                <div style={card_tablet_medium_vertical} className="cardHome">  
                <CardData/>
                </div>

             }


              {matches.tablet_medium_landscape
               && 
                <div style={card_tablet_medium_landscape} className="cardHome">  
              <CardData/>
                </div>
             }

              {matches.tablet_large_landscape
               &&
               <div style={card_tablet_large_landscape} className="cardHome">  
             <CardData/>
               </div>

              }


              {matches.desktop
               && 
               <div style={desktop} class="cardHome">  

                 <CardData/>
               </div>

             }
            </Fragment>
          )}
        </Media>
      </div>
    );
  }


}

export default HouseDataCard;
