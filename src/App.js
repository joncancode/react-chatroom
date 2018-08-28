import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit';
import RoomList from './components/RoomList';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import NewRoomForm from './components/NewRoomForm';
import './App.css';

import { tokenUrl, instanceLocator } from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: 'user1',
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager.connect().then(currentUser => {
      currentUser.subscribeToRoom({
        roomId: 14871970,
        messageLimit: 30,
        hooks: {
          onNewMessage: message => {
            console.log('message.text', message.text);
            this.setState({
              messages: [...this.state.messages, message]
            })
          }
        }
      });
    });
  }

  render() {
    console.log('dog', this.state.messages)
    return (
      <div className="App">
        <RoomList />
        <MessageList messages={this.state.messages}/>
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

export default App;
