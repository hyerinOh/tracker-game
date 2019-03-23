import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    if (this.props.isCorrectAnswer) {
      
      if (this.props.winner === this.props.currUserInfo.name) {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <button
                type="button"
                className="closeBtn"
                onClick={this.props.handleClose}
              >
              x
              </button>
    
              <div>
                <p>You found!</p>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <button
                type="button"
                className="closeBtn"
                onClick={this.props.handleClose}
              >
              x
              </button>
              <div>
                <p>{this.props.winner} found your location</p>
              </div>
            </div>
          </div>
        );
      }
      
    } else {
      if(this.props.isUpOrDown === 'Up') {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <button
                type="button"
                className="closeBtn"
                onClick={this.props.handleClose}
              >
              x
              </button>
    
              <div>
                <p>{this.props.isUpOrDown}</p>
              </div>
            </div>
          </div>
        );

      } else if (this.props.isUpOrDown === 'Down') {
        return (
          <div className="modal display-block">
            <div className="modal-main">
              <button
                type="button"
                className="closeBtn"
                onClick={this.props.handleClose}
              >
              x
              </button>
    
              <div>
                <p>{this.props.isUpOrDown}</p>
              </div>
            </div>
          </div>
        );
      }
    } 
    return 1;
  }
}
