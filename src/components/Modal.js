import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    console.log('modal', props);
  }

  backToSignIn() {
    this.props.resetTarget();
    this.props.history.push('/');
  }

  render() {
    if (this.props.isCorrectAnswer) {
      if (this.props.winner === this.props.currUserInfo.name) {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <div className="modalForWinner">
                <p className="foundMessage">You found!</p>
                <p>:-)</p>
              </div>
              <button
                type="button"
                className="backToSignInBtn"
                onClick={this.backToSignIn.bind(this)}
              >
                Try another game?
              </button>
            </div>
          </div>
        );
      } else {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <div className="modalForLoser">
                <p className="foundWinner">{this.props.winner}</p>
                <p className="wasFoundMessage">found your location :-(</p>
              </div>
              <button
                type="button"
                className="backToSignInBtn"
                onClick={this.backToSignIn.bind(this)}
              >
                Try another game?
              </button>
            </div>
          </div>
        );
      }
    } else {
      if(this.props.isUpOrDown === 'Up') {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <div>
                <p className="upOrDown">{this.props.isUpOrDown}</p>
                <button
                type="button"
                className="tryAgainBtn"
                onClick={this.props.handleClose}
                >
                  try again
                </button>
              </div>
            </div>
          </div>
        );
      } else if (this.props.isUpOrDown === 'Down') {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <div>
                <p className="upOrDown">{this.props.isUpOrDown}</p>
                <button
                type="button"
                className="tryAgainBtn"
                onClick={this.props.handleClose}
                >
                  try again
                </button>
              </div>
            </div>
          </div>
        );
      } else if (this.props.isTimeout) {
        return (
          <div className="modal display-block">
            <div className="timeout-modal">
              <div>
                <p className="timeout-notice">Time out!</p>
                <button
                  type="button"
                  className="backToSignInBtn"
                  onClick={this.backToSignIn.bind(this)}
                >
                  Try another game?
                </button>
              </div>
            </div>
          </div>
        );
      }
    }
  }
}
