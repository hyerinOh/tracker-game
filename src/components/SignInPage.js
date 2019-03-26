import React, { Component } from 'react';
import firebase from 'firebase';
// import socketio from 'socket.io-client';
// import logo from './logo.svg';
import background from './screen.png';

export default class SignInPage extends Component {
  constructor (props) {
    super(props);
    
    // this.state = {
    //   userInfo: [],
    // };
    this.auth = this.auth.bind(this);

  }

  render() {
    return (
      <div className="signIn_wrapper">
      <img
        className="mainImage" 
        src={background}
      />
        <button 
          className="signInBtn"
          onClick={this.auth.bind(this)}
        >
        {/* <img src="./facebook_logo.png" /> */}
        Log in with Facebook
        </button>
        {/* <button onClick={this.logout.bind(this)}>Sign out</button> */}
      </div>
    );
  }

  auth() {
    const config = {
      apiKey: "AIzaSyB73ueN7dSfWwN5hA9vKobhjcRJMbuDeTY",
      authDomain: "tracker-game2.firebaseapp.com",
      databaseURL: "https://tracker-game2.firebaseio.com",
      projectId: "tracker-game2",
      storageBucket: "tracker-game2.appspot.com",
      messagingSenderId: "432417324683"
    };
    

    !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
    
    const provider = new firebase.auth.FacebookAuthProvider();
  
    provider.addScope('email');
  
    firebase.auth().languageCode = 'ko_KR';
  
    firebase.auth().signInWithPopup(provider).then((result) => {
      const token = result.credential.accessToken;   
      console.log('rrrrr', result)   
     
      const user = result.user;
      const currUser = {};
      currUser.name = user.displayName;
      currUser.photo = user.photoURL;
      this.props.saveCurrUserInfo(currUser);
      const location = {};
      const userNameAndPhto = {};
      userNameAndPhto.name = user.displayName;
      userNameAndPhto.photo = user.photoURL;
      userNameAndPhto.location = {
        latitude: 37.184631,
        longitude: 127.121022
      }
     
      this.props.requestRoom(userNameAndPhto);
      // this.props.getAndSaveAllClientsInfo(this.props.userInfo);
      this.props.history.push('/matching');

      navigator.geolocation.getCurrentPosition((position) => {
        location.latitude = position.coords.latitude;
        location.longitude = position.coords.longitude;
        // this.props.sendLocation(location);
        console.log(position);
      });

      // geolocation 안 잡힐 경우
      // this.props.sendLocation(location);
      // this.props.getOrder();
      
    }).catch(function(error) {
      console.log(error)
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