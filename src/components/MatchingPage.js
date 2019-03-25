import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../index.css';
// import socketio from 'socket.io-client';

export default class MatchingPage extends Component {
  constructor(props) {
    super(props);
    this.handleStart = this.handleStart.bind(this);
  }

  handleStart() {
    this.props.history.push('/game');
  }
  // componentWillReceiveProps() {
  //   if (this.props.userInfo.length === 2) {
  //     setTimeout(() => {
  //       this.props.history.push('/game');
  //     }, 3000);
  //   }
  // }

  render() {
    console.log('matching', this.props);
    return (
      <div className="matchingPage_background">
        <p className="matchingTitle">MATCH!</p>
        <div className="matchedUser_wrapper">
          {
            this.props.userInfo.length
            ? this.props.userInfo.map((user) => {
              return(
                <div className="matchedUsers">
                  <img className="matchedUserPhoto" src={user.photo} alt="userPhoto" />
                  <p className="matchedUsrName">{user.name}</p>
                </div>
              );
            })
            : null
          }
        </div>
        <button
          onClick={this.handleStart}
          className="startBtn"
        >
          start
        </button>
      </div>
    );
  }
}
