import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import socketio from 'socket.io-client';
import {
  Action, GetLocation, getCurrentUserInfo, getRealWinner, getTarget,
} from '../actions/action';
import AppComponent from '../components/App';

class App extends Component {
  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    const { socket, getLocation } = this.props;

    socket.on('quiz', (opponentLoc) => {
      getLocation(opponentLoc);
    });
  }

  render() {
    return <AppComponent {...this.props} />;
  }
}

const socket = socketio.connect('http://localhost:3001');

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
    socket,
    oppLocation: state.oppLocation,
    currUserInfo: state.currUserInfo,
    winner: state.winner,
    target: state.target,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrUserInfo: (currUserInfo) => {
      dispatch(getCurrentUserInfo(currUserInfo));
    },
    requestRoom: (userNameAndPhto) => {
      socket.emit('requestRoom', userNameAndPhto);
    },
    getAndSaveAllClientsInfo: () => {
      socket.on('all', (all) => {
        dispatch(Action(all));
      });
    },
    sendLocation: (location) => {
      socket.emit('location', location);
    },
    getLocation: (location) => {
      dispatch(GetLocation(location));
    },
    getWinner: (winner) => {
      socket.emit('winner', winner);
    },
    distinguishWinner: (who) => {
      dispatch(getRealWinner(who));
    },
    getTarget: () => {
      socket.on('target', (target) => {
        dispatch(getTarget(target));
      });
    },
    resetTarget: () => {
      dispatch(getTarget({}));
    },
    removeRoom: (roomId) => {
      socket.emit('removeRoom', roomId);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
