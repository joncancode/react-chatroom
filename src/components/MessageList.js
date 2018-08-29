import React, { Component } from 'react';
import Message from './Message';

class MessageList extends Component {
  render() {
    return (
      <div className="MessageList" style={{ border: '1px solid green' }}>
        <p>MessageList component</p>
        {this.props.messages.map((message, index) => {
          return (
            <Message
              key={index}
              username={message.senderId}
              text={message.text}
            />
          );
        })}
      </div>
    );
  }
}

export default MessageList;
