import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList" style={{ border: '1px solid green' }}>
        <p>MessageList component</p>
        {this.props.messages.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}:</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
        <Message />
      </div>
    );
  }
}

export default MessageList;
