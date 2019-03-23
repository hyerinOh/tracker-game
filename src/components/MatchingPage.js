import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../index.css';
// import socketio from 'socket.io-client';

export default class MatchingPage extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.handleStart = this.handleStart.bind(this);
  }


  handleStart() {
    this.props.history.push('/game');
    // const socket = socketio.connect('http://localhost:3001');
    
  }
  render() {
    {
      return (
        <div>
          {
            this.props.userInfo.length
            ? this.props.userInfo.map((user) => {
              return(
                <p>{user.name}</p>
              )
            })
            : null
          }
          <button 
            type="button"
            disabled={this.props.userInfo.length === 1}
            onClick={this.handleStart.bind(this)}
          > 
          START! 
          </button>
        </div>
      )
    }
  }
}
