import React, { Component } from 'react';
import './RoomList.css';

class RoomList extends Component {
  render() {
    console.log('this rooms', this.props.rooms)
    return (
      <div className="RoomList" style={{border: '1px solid pink'}}>
        <ul>
          <h3>your rooms</h3>
        {this.props.rooms.map(room => {
          return (
            <li key={room.id}>
              <a href="#">>{room.name}</a>
            </li>
          )
        })}
        </ul>
      </div>
    );
  }
}

export default RoomList;
