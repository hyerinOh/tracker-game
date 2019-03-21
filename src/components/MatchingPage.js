import React, { Component } from 'react';
import ReactDom from 'react-dom';
import '../index.css';

export default class MatchingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    {
      return (
        <div>
          {
            this.props.userInfo.map((user) => {
              return(
                <p>{user.name}</p>
              )
            })
          }
          <button type="button" disabled={this.props.userInfo.length === 1} > START! </button>
        </div>
      )
    }
  }
}
