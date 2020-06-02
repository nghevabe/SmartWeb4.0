import React from 'react';
import HomeBackground from './components/HomePage/HomeBackground';
import HomeCardview from './components/HomePage/HomeCardview';
import Header from './components/Commons/Header';
import HomeBody from './components/HomePage/HomeBody';
import Footer from './components/Commons/Footer';
import HomeBodyImage from './components/HomePage/HomeBodyImage';
import CardBody from './components/HomePage/CardBody';
import ImageIntroduce from './components/HomePage/ImageIntroduce';
import ChatUI from './components/AssistantPage/ChatUI';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import HousePage from './components/HouseControllerPage/HousePage';
import HouseDeviceDetailPage from './components/HouseControllerPage/HouseDeviceDetailPage';

function Demo() {
  return (
   
  <div>

<BrowserRouter>
       
      
 
          
       
      
     

  <Header/>

          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/assistant" component={ChatUI} />
            <Route path="/house" component={HousePage} />
            <Route path="/housedetaildevice" component={HouseDeviceDetailPage} />
          </div>

  <Footer/>

 </BrowserRouter>

  
  </div>
  );
}

export default Demo;
