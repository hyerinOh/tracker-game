import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import socketio from 'socket.io-client';
import {
  Action, GetLocation, getCurrentUserInfo, getRealWinner,
} from '../actions/action';
import AppComponent from '../components/App';

class App extends Component {
  constructor(props) { 
    super(props);
  }

  componentDidMount() {
    const { socket } = this.props;

    socket.on('quiz', (opponentLoc) => {
      console.log('<<<상대방위치>>>>')
      console.log(opponentLoc);
      this.props.getLocation(opponentLoc);
    });
  }
  render() {
    return <AppComponent {...this.props} />
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveCurrUserInfo: (currUserInfo) => {
      dispatch(getCurrentUserInfo(currUserInfo));
    },
    sendUserName: (userName) => {
      socket.emit('userName', userName);
    },
    getAndSaveAllClientsInfo: (allClients) => {
      socket.on('all', (all) => {
        dispatch(Action(all));
      });
    },
    sendLocation: (location) => {
      socket.emit('location', location);
    },
    getOrder: (order) => {
      socket.on('order', (count) => {
        console.log(count);
      });
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
    // onLoadData: (loadingType) => {
    //   dispatch(LoadingAction(loadingType));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
