import React, { Component } from 'react';

class SendMessageList extends Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.sendMessage(this.state.message);
    this.setState({
      message: ''
    })
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="SendMessageListList"
        style={{ border: '1px solid darkblue' }}
      >
        <input
          onChange={this.handleChange}
          value={this.state.message}
          placeholder="insert text"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageList;
