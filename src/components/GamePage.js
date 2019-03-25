import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Modal from './Modal';

ReactMapGL.accessToken = 'pk.eyJ1IjoiaHllbmluaWlpIiwiYSI6ImNqcWtubmw2dTZvM2Q0MnVsNW54bmJ6aXkifQ.VTRzsYgEhe2BGUx35C3lgQ';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.state = {
      viewport: {
        width: 640,
        height: 1622,
        latitude: this.props.oppLocation.latitude,
        longitude: this.props.oppLocation.longitude,
        zoom: 16,
      },
      first: '',
      second: '',
      third: '',
      isModalOpen: false,
      isCorrectAnswer: false,
      isUpOrDown: '',
      time: 1000,
      isTimeout: false,
      interval: setInterval(() => {
        this.setState({
          time: this.state.time - 1
        });
      }, 1000)
    };
    this.onTimeout = this.onTimeout.bind(this);
  }

  componentDidMount() {
    const { socket } = this.props;
    const { isModalOpen } = this.state;

    socket.on('who', (who) => {
      if (!isModalOpen) {
        this.setState({
          isModalOpen: true,
          isCorrectAnswer: true
        });
        this.props.distinguishWinner(who);
      }
    });
  }

  onTimeout() {
    setInterval(() => {
      this.setState({
        time: this.state.time - 1
      });
    }, 1000)
  }
  handleFirst = (e) => {
    if (e.target.value.length <= 1) {
      this.setState({
        first: e.target.value
      });
    }
    if (e.target.value.length === 1) {
      this.second.focus();
    }
  };

  handleSecond = (e) => {
    if (e.target.value.length <= 1) {
      this.setState({
        second: e.target.value
      });
    }
    if (e.target.value.length === 1) {
      this.third.focus();
    }
    if (e.target.value.length === 0) {
      this.first.focus();
    }
  }

  handlethird = (e) => {
    if (e.target.value.length <= 1) {
      this.setState({
        third: e.target.value
      });
    }
  }

  distinguishCorrectAnswer() {
    const { first, second, third } = this.state;
    const strLat = this.props.oppLocation.latitude.toString();
    const realAnswer = Number(strLat.substring(strLat.length - 3, strLat.length));

    if (first && second && third) {
      const answer = Number([first, second, third].join(''));
      if (answer === realAnswer) {
        this.setState({
          isCorrectAnswer: true,
          isModalOpen: true,
        })
        this.props.getWinner(this.props.currUserInfo.name);
        this.props.distinguishWinner(this.props.currUserInfo.name);
      } else {
        if (answer < realAnswer) {
          this.setState({
            isCorrectAnswer: false,
            isUpOrDown: 'Up',
            isModalOpen: true,
          });
        } else if (answer > realAnswer) {
          this.setState({
            isCorrectAnswer: false,
            isUpOrDown: 'Down',
            isModalOpen: true,
          })
        }
      }
    }
  }

  handleClose() {
    this.setState({
      isModalOpen: false,
      first: '',
      second: '',
      third: '',
    });
  }

  render() {
    const strLat = this.props.oppLocation.latitude.toString();
    const quizLat = strLat.substring(0, strLat.length - 3);

    if (this.state.time <= 0) {
      clearInterval(this.state.interval);
    }
    
    return (
      <div>
        <div className="currUserWrapper">
          <p className="currUserName">{this.props.currUserInfo.name}</p>
        </div>
        {
          <div>
            <div className="timer_wrapper">
              <p>{this.state.time} </p>
            </div>

            <div>
              {
                this.state.time === 0
                ? <Modal {...this.props} isTimeout={true} />
                : null
              }
            </div>
          </div>
        }

        <ReactMapGL
          mapboxApiAccessToken={ReactMapGL.accessToken}
          {...this.state.viewport}
          onViewportChange={(viewports) => {
            this.setState({ viewport: viewports });
          }}
          mapStyle="mapbox://styles/hyeniniii/cjsudcekl687d1flifo199qck"
        >
          <Marker 
            key={this.props.oppLocation.name}
            className="oppMarker"
            latitude={this.props.oppLocation.latitude}
            longitude={this.props.oppLocation.longitude}
            anchor="bottom"
          />
        </ReactMapGL>
        <div className="quizWrapper">
          <div>
          
          {
            <div className="quiz">
              <p className="given_longitude">{this.props.oppLocation.longitude}</p>
              <div className="quiz-latitude">
                <p className="given_latitude">{quizLat}</p>
                <div className="inputWrapper">
                  <input
                    type="text"
                    className="firstAnswer"
                    maxLength="1"
                    ref={(first) => this.first = first}
                    value={this.state.first}
                    onChange={this.handleFirst}
                  />
                  <input
                    type="text"
                    className="firstAnswer"
                    maxLength="1"
                    ref={(second) => this.second = second}
                    value={this.state.second}
                    onChange={this.handleSecond}
                  />
                  <input
                    type="text"
                    className="firstAnswer"
                    maxLength="1"
                    ref={(third) => this.third = third}
                    value={this.state.third}
                    onChange={this.handlethird}
                  />
                </div>
              </div>
            </div>
          }
            <button
              type="submit"
              value="Submit"
              className="submitBtn"
              onClick={this.distinguishCorrectAnswer.bind(this)}
            >
              Here's my Answer!
            </button>
          </div>
        </div>
        {
          this.state.isModalOpen
            ? <Modal {...this.props} isCorrectAnswer={this.state.isCorrectAnswer} isUpOrDown={this.state.isUpOrDown} handleClose={this.handleClose.bind(this)}/>
            : null
        }
      </div>
    );
  }
}
