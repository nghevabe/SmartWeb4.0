import React from 'react';
import HomeBackground from './components/HomeBackground';
import HomeCardview from './components/HomeCardview';
import Header from './components/Header';
import HomeBody from './components/HomeBody';
import Footer from './components/Footer';
import HomeBodyImage from './components/HomeBodyImage';
import CardBody from './components/CardBody';
import ImageIntroduce from './components/ImageIntroduce';
import ChatUI from './components/ChatUI';
import { BrowserRouter, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage';

function Demo() {
  return (
   
  <div>

<BrowserRouter>
       
      
 
          
       
      
     

  <Header/>
 
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/assistant" component={ChatUI} />
            <Route path="/house" component={HomeBodyImage} />
          </div>

  <Footer/>

 </BrowserRouter>

  
  </div>
  );
}

export default Demo;
