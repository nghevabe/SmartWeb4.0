import React, { Component } from 'react';
import '../../css/chat_css.css';
import icon_assistant from '../../image/qoobee.png'
import $ from 'jquery';


class ChatUI extends Component{

constructor() {
      super();

      this.displayData = [];
      this.chuoi1 = "";
      this.request = "";

      this.state = {
        showdata : this.displayData,
        postVal : "",
        data : null,
       
      }

      this.sendMessager = this.sendMessager.bind(this);

      this.Responser = this.Responser.bind(this);
      this.BotResponse = this.BotResponse.bind(this);

    
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
        fetch("http://assistanthome.somee.com/api/assistant?request=" + this.request)
        .then( response => response.json())
        .then(
            // handle the result
            (result) => {
          
                //this.chuoi1 = result;
                
                 result.map(post => (
                          this.chuoi1 = post.Contend
                        ))
                        
                       //alert(this.chuoi1);
             

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
    fetch("http://assistanthome.somee.com/api/assistant?request=" + this.request)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
   
  sendMessager() {
         this.displayData.push(
         	<div>
         	<div class="ava_left">
         	
         	</div>
         	<div class="mes_left" id="display-data">{this.state.postVal}</div>
            </div>
         	);
         this.setState({
            showdata : this.displayData,
            postVal : ""
         });
      }

      BotResponse() {
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

      RequestBot() {
        this.sendMessager();

      	this.request = this.state.postVal;

      	setTimeout(this.componentDidMount, 1000);
      
      	setTimeout(this.BotResponse, 2000);
      	
 


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



 handleChange(e) {
      let getTextAreaValue = e.target.value;
      this.setState({
        postVal :getTextAreaValue
      });
}

/*

render() {
        const {error, isLoaded, posts} = this.state;

        if(error){
            return <div>Error in loading</div>
        }else if (!isLoaded) {
            return <div>Loading ...</div>
        }else{
            return(
                <div>
                    <ol>
                    {
                        posts.map(post => (
                            <li key={post.id} align="start">
                                <div>
                                    <p>{post.title}</p>
                                    <p>{post.body}</p>
                                </div>
                            </li>
                        ))
                    }
                    </ol>
                </div>
            );
        }    
    }

*/

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
