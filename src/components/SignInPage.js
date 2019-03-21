import React, { Component } from 'react';
import firebase from 'firebase';
import socketio from 'socket.io-client';
import logo from './logo.svg';

export default class SignInPage extends Component {
  constructor (props) {
    super(props);
    
    this.state = {
      userInfo: [],
    };

    this.auth = this.auth.bind(this);
  }

  render() {
    return (
      <div className="signIn_wrapper">
      <img src={logo} />
        <button className="signInBtn" onClick={this.auth.bind(this)}>Sign in</button>
        <button onClick={this.logout.bind(this)}>Sign out</button>
      </div>
    );
  }

  auth() {
    const config = {
      apiKey: "AIzaSyA0RVxAx1MmDr6leIKl_n0mGt07lTlJyY0",
      authDomain: "tracker-game.firebaseapp.com",
      databaseURL: "https://tracker-game.firebaseio.com",
      projectId: "tracker-game",
      storageBucket: "tracker-game.appspot.com",
      messagingSenderId: "439004876954"
    };
  
    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    const provider = new firebase.auth.FacebookAuthProvider();
  
    provider.addScope('email');
  
    firebase.auth().languageCode = 'ko_KR';
  
    firebase.auth().signInWithPopup(provider).then((result) => {
      const token = result.credential.accessToken;
      const user = result.user;
      const userInfo = {};
      const allUsers = [];
      const socket = socketio.connect('http://localhost:3001');
      
      socket.emit('userName', user.displayName);
      socket.on('all', (all) => {
        console.log(all)
        this.props.saveUserInfo(all);
        this.props.history.push('/matching');
      })
      // socket.on('userId', (userId) => {
      //   socket.emit('userName', user.displayName);
      //   // if (allUsers.length <= 2) {
      //   //   userInfo.id = userId;
      //   //   userInfo.name = user.displayName;
      //   //   allUsers.push(userInfo);
      //   //   
      //   //   
      //   //   console.log(allUsers);
      //   // }
        
      // });
      // socket.on('order', (count) => {
      //   console.log('order', count)
      // });
      // socket.on('allClients', (allClients) => {
      //   console.log('all', allClients);
      // })
      // console.log('log in', user);
    }).catch(function(error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });
  
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        var token = result.credential.accessToken;
        console.log(token);
      }
      const user = result.user;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  logout = () => {
    firebase.auth().signOut().then(function() {
      console.log('logout');
    }).catch(function(error) {
      console.log(error)
    });
  }
}