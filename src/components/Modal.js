import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
  }

  backToSignIn() {
    const {
      removeRoom, resetTarget, history, target
    } = this.props;
    removeRoom(target.roomId);
    resetTarget();
    history.push('/');
  }

  render() {
    const {
      isCorrectAnswer, winner, currUserInfo, isUpOrDown, handleClose, isTimeout
    } = this.props;

    if (isCorrectAnswer) {
      if (winner === currUserInfo.name) {
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
                <p className="foundWinner">{winner}</p>
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
      if(isUpOrDown === 'Up') {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <div>
                <section className="rainbow">
                  <p className="text">{isUpOrDown}</p>
                </section>
                <button
                type="button"
                className="tryAgainBtn"
                onClick={handleClose}
                >
                  try again
                </button>
              </div>
            </div>
          </div>
        );
      } else if (isUpOrDown === 'Down') {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <div>
                <section className="rainbow">
                  <p className="text">{isUpOrDown}</p>
                </section>
                <button
                type="button"
                className="tryAgainBtn"
                onClick={handleClose}
                >
                  try again
                </button>
              </div>
            </div>
          </div>
        );
      } else if (isTimeout) {
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
