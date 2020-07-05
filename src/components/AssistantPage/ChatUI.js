import React, { Component } from 'react';
import '../../css/chat_css.css';
import icon_assistant from '../../image/qoobee.png'
import icon_voice from '../../image/voice_icon.png'

class ChatUI extends Component{

constructor() {
      super();

      this.base_ulr = "http://www.assistanthome.somee.com/api/assistant?request=";

      this.displayData = [];
      this.chuoi1 = "";
      this.request = "";
      this.tts2 = "ABC";
      this.meMessage = "";

      this.state = {
        showdata : this.displayData,
        postVal : "",
        data : null,
       
      }

      this.sendMessager = this.sendMessager.bind(this);

      this.Responser = this.Responser.bind(this);
      this.BotResponse = this.BotResponse.bind(this);

      this.startDictation = this.startDictation.bind(this);
      this.VoiceBot = this.VoiceBot.bind(this);
      this.RequestBot = this.RequestBot.bind(this);
      this.componentDidMount = this.componentDidMount.bind(this);
      
      
      this.handleChange = this.handleChange.bind(this);

    };

    Anal() {
     //alert('Hello');
     this.appendData();
    
     setTimeout(this.Responser, 2000);

    }

   

    componentDidMount() {
      //ngày mai trời có mưa không
        // I will use fake api from jsonplaceholder website
        // this return 100 posts 
        //http://assistanthome.somee.com/api/assistant?request=ngày%20mai%20trời%20có%20mưa%20không
        // https://jsonplaceholder.typicode.com/posts

        fetch(this.base_ulr + this.request)
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
          
                this.setState({
                    isLoaded : true,                
                    posts : result,

                });
            },

            // Handle error 
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            },
        )
    }

    componentDidMount2() {
    fetch(this.base_ulr + this.request)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
   
  sendMessager() {

         //alert(this.tts2)

         this.displayData.push(
          <div>
          <div class="ava_left">
          
          </div>
          <div class="mes_left" id="display-data">{this.meMessage}</div>
            </div>
          );
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
      }

      BotResponse() {
 
   {
          
      this.state.posts.map(post => (
                          this.chuoi1 = post.Contend
                        ))

   }

this.displayData.push(

          <div>
          <div class="ava_right">
            <img  src={icon_assistant} alt={icon_assistant} width="100%" height="100%"/>
          </div>
          <div class="mes_right" id="display-data">{this.chuoi1}</div>
            </div>

         );
        
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
      }

     
   Responser() {
         this.displayData.push(
          <div>
          <div class="ava_right">
            <img  src={icon_assistant} alt={icon_assistant} width="100%" height="100%"/>
          </div>
          <div class="mes_right" id="display-data">Tôi là Bot</div>
            </div>
          );
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
      }

startDictation() {

    
    window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;

    let finalTranscript = '';

     

    let recognition = new window.SpeechRecognition();



    recognition.interimResults = true;

    recognition.maxAlternatives = 10;

    recognition.continuous = true;





    recognition.onresult = (event) => {

      let interimTranscript = '';

      for (let i = event.resultIndex, len = event.results.length; i < len; i++) {

        let transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {

          finalTranscript += transcript;

        } else {

          interimTranscript += transcript;

        }

      }



     
    this.meMessage = finalTranscript
    this.request = finalTranscript
      //document.querySelector('body').innerHTML = "finalTranscript" + '<i style="color:#ddd;">' + interimTranscript + '</>';

    }

    recognition.start();
   
  
  
}
   
    

   
   
  

    
 RequestBot() {
        this.sendMessager();
        this.request = this.state.postVal;
        setTimeout(this.componentDidMount, 1000);
        setTimeout(this.BotResponse, 2000);
      }

    

      VoiceBot() {

        this.startDictation();
        
        setTimeout(this.sendMessager, 4000);
        //this.request = this.meMessage;
        setTimeout(this.componentDidMount, 5000);
        setTimeout(this.BotResponse, 6000);
      }

 handleChange(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal :getTextAreaValue
      });
      this.meMessage = getTextAreaValue;
}


 render(){

  return (
   
   <div>
  <div className="chat_window">

  <div className="top_menu">
      <div className="buttons">
      
   </div>
  <div className="title">Assistant Bot</div>
</div>

<ul  className="messages">

 <div id="display-data-Container">
            
                 
                   {this.displayData}
             

             </div>

</ul>

<div className="bottom_wrapper clearfix">

  <div className="message_input_wrapper">
    <input value={this.state.postVal} onChange={this.handleChange} className="message_input" placeholder="Type your message here..."/>
  </div>

 <div onClick={this.VoiceBot} className="btn_voice">
<img src={icon_voice} alt="Trulli" width="40" height="40"/>
   </div>

  <div className="send_message">
    <div type="submit" className="text" onClick={this.RequestBot}   >Send</div>
  </div>

</div>

</div>



<div className="message_template">
<li className="message">

  <div className="avatar">  </div>
 
  <div className="text_wrapper">
    <div className="text">   </div>
  </div>
  </li>

</div>
  </div>
  

  );
 
}

}

export default ChatUI;