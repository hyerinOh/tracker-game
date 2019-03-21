import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Action from '../actions/action';
import AppComponent from '../components/App';

class App extends Component {
  constructor(props) {
      super(props);
  }
  render() {
    return <AppComponent {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUserInfo: (userInfo) => {
      dispatch(Action(userInfo));
    },
    // onLoadData: (loadingType) => {
    //   dispatch(LoadingAction(loadingType));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
