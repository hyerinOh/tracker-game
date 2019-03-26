import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../index.css';
// import socketio from 'socket.io-client';

export default class MatchingPage extends Component {
  constructor(props) {
    super(props);
    // this.handleStart = this.handleStart.bind(this);
  }

  componentDidMount() {
    console.log('11111');
    console.log(this.props)
    this.props.getTarget();
  }

  // handleStart() {
  //   this.props.history.push('/game');
  // }

  // componentWillReceiveProps() {
    
  // }

  render() {
    console.log('matching', this.props.target);
    if (this.props.target.name) {
      setTimeout(() => {
        this.props.history.push('/game');
      }, 3000);
    }
    return (
      <div className="matchingPage_background">
        <p className="matchingTitle">MATCH!</p>
        <div className="matchedUser_wrapper">
          <div className="matchedUsers">
            <div className="loader">
              <svg className="circular-loader"viewBox="25 25 50 50" >
                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#ff7754" stroke-width="2" />
              </svg>
            </div>
            <img className="matchedUserPhoto" src={this.props.currUserInfo.photo} alt="userPhoto" />
            <p className="matchedUsrName">{this.props.currUserInfo.name}</p>
            <div>
              {
                this.props.target.name
                  ? (
                    <div>
                      <div className="loader">
                        <svg className="circular-loader"viewBox="25 25 50 50" >
                          <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#ff7754" stroke-width="2" />
                        </svg>
                      </div>
                      <img className="matchedUserPhoto" src={this.props.target.photo} alt="userPhoto" />
                      <p className="matchedUsrName">{this.props.target.name}</p>
                    </div>
                  )
                  : null
              } 
            </div>
          </div>
        </div>
        {/* <button
          onClick={this.handleStart}
          className="startBtn"
        >
          start
        </button> */}
      </div>
    );
  }
}
