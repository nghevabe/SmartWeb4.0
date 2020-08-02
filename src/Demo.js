import React, { Component } from 'react';
import HomeBackground from './components/HomePage/HomeBackground';
import HomeCardview from './components/HomePage/HomeCardview';
import Header from './components/Commons/Header';
import HomeBody from './components/HomePage/HomeBody';
import Footer from './components/Commons/Footer';
import HomeBodyImage from './components/HomePage/HomeBodyImage';
import CardBody from './components/HomePage/CardBody';
import ImageIntroduce from './components/HomePage/ImageIntroduce';
import ChatUI from './components/AssistantPage/ChatUI';
import VoiceUI from './components/AssistantPage/VoiceTest';
import { BrowserRouter, Route, Link ,Switch} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import HousePage from './components/HouseControllerPage/HousePage';
import DevicePage from './components/DeviceControllerPage/DevicePage';
import HouseDeviceDetailPage from './components/HouseControllerPage/HouseDeviceDetailPage';

import SetupBody from './components/SetupPage/SetupBody';
import ScenarioBody from './components/ScenarioPage/ScenarioBody';

import LoginForm from './components/AuthorityPage/LoginForm';
import RegisterForm from './components/AuthorityPage/RegisterForm';

import ProfileForm from './components/ProfilePage/ProfileForm';

import Cookies from 'universal-cookie';

class Demo extends Component {

 
  constructor() {
    super();
    this.filterUser = this.filterUser.bind(this);
    this.state = { name: '', age: '', filter: 'XXX' };
  } 

  filterUser = (filterValue) => {
    this.setState({
      filter: filterValue
    });
  }


  render() {
  return (
   
  <div>

<BrowserRouter>
       
      
 
  <Header/>
  

  <div>

            <Route exact path="/" component={HomePage} />

            <Route path="/assistant" component={ChatUI} />

            <Route path="/house" component={HousePage} />

            <Route path="/house-detail-device" component={HouseDeviceDetailPage} />

            <Route path="/device" component={DevicePage} />

            <Route path="/house-setup" component={SetupBody} />

            <Route path="/house-scenario" component={ScenarioBody} />

            <Route path="/login" component={LoginForm} />

            <Route path="/register" component={RegisterForm} />

            <Route path="/profile" component={ProfileForm} />

          </div>

  <Footer/>

 </BrowserRouter>

  
  </div>
  );
}

}

export default Demo;
