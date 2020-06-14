'use strict'
import React, { Component } from "react"


//------------------------SPEECH RECOGNITION-----------------------------




//------------------------COMPONENT-----------------------------

class Speech extends Component {

   

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



      document.querySelector('body').innerHTML = "finalTranscript" + '<i style="color:#ddd;">' + interimTranscript + '</>';

    }

    recognition.start();
    
      setTimeout(function(){ recognition.stop(); }, 2000);

    }



  

  render() {
    return (
      <div class="container">

                 
                <button id="start-record-btn" onClick={this.startDictation}  title="Start Recording">Start Recognition</button>
             

         

        </div>
    )
  }
}

export default Speech


//-------------------------CSS------------------------------------

