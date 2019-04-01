import React, { Component } from 'react';
import '../index.css';

export default class MatchingPage extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    const { getTarget } = this.props;
    getTarget();
  }

  render() {
    const { target, history, currUserInfo } = this.props;

    if (target.name) {
      setTimeout(() => {
        history.push('/game');
      }, 10000);
    }
    return (
      <div className="matchingPage_background">
        <p className="matchingTitle neon">match!</p>
        <div className="matchedUser_wrapper">
          <div className="matchedUsers">
            <div className="loader">
              <svg className="circular-loader" viewBox="25 25 50 50">
                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#ff7754" strokeWidth="2" />
              </svg>
            </div>
            <img className="matchedUserPhoto" src={currUserInfo.photo} alt="userPhoto" />
            <p className="matchedUsrName">{currUserInfo.name}</p>
          </div>
          <div className="matchedUsers">
            {
              target.name
                ? (
                  <div>
                    <div className="loader">
                      <svg className="circular-loader" viewBox="25 25 50 50" >
                        <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#ff7754" strokeWidth="2" />
                      </svg>
                    </div>
                    <img className="matchedUserPhoto" src={target.photo} alt="userPhoto" />
                    <p className="matchedUsrName">{target.name}</p>
                  </div>
                )
                : null
            }
          </div>
        </div>
      </div>
    );
  }
}
