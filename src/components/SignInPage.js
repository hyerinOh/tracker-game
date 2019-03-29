import React, { Component } from 'react';
import firebase from 'firebase';
import background from './screen.png';

export default class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.auth = this.auth.bind(this);
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
      alert('로그인')
      const token = result.credential.accessToken;  
      // geolocation 안 될 때

      // const user = result.user;
      // const currUser = {};
      // currUser.name = user.displayName;
      // currUser.photo = user.photoURL;
      // this.props.saveCurrUserInfo(currUser);
      // const location = {};
      // const userNameAndPhto = {};
      // userNameAndPhto.name = user.displayName;
      // userNameAndPhto.photo = user.photoURL;
      // userNameAndPhto.location = {
      //   latitude: 37.184631,
      //   longitude: 127.121022
      // }

      // this.props.requestRoom(userNameAndPhto);
      // this.props.history.push('/matching');

      navigator.geolocation.getCurrentPosition((position) => {
        const user = result.user;
        const currUser = {};
        const { saveCurrUserInfo, requestRoom, history } = this.props;
        const userNameAndPhto = {};
        const currLatitude = position.coords.latitude.toFixed(6);
        const currLongitude = position.coords.longitude.toFixed(6);

        currUser.name = user.displayName;
        currUser.photo = user.photoURL;
        saveCurrUserInfo(currUser);
        userNameAndPhto.name = user.displayName;
        userNameAndPhto.photo = user.photoURL;
        userNameAndPhto.location = {
          latitude: currLatitude,
          longitude: currLongitude,
        };
        requestRoom(userNameAndPhto);
        history.push('/matching');
      });

      // geolocation 안 잡힐 경우
      // this.props.sendLocation(location);
      // this.props.getOrder();
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
    });

    firebase.auth().getRedirectResult().then((result) => {
      if (result.credential) {
        var token = result.credential.accessToken;
      }
      const user = result.user;
    }).catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
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
          Log in with Facebook
        </button>
      </div>
    );
  }
}
