import React, { Component } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import Modal from './Modal';

ReactMapGL.accessToken = 'pk.eyJ1IjoiaHllbmluaWlpIiwiYSI6ImNqcWtubmw2dTZvM2Q0MnVsNW54bmJ6aXkifQ.VTRzsYgEhe2BGUx35C3lgQ';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const { location } = this.props;
    this.state = {
      viewport: {
        width: 640,
        height: 1622,
        latitude: Number(this.props.target.location.latitude) - 0.002,
        longitude: Number(this.props.target.location.longitude),
        zoom: 16,
      },
      first: '',
      second: '',
      third: '',
      isModalOpen: false,
      isCorrectAnswer: false,
      isUpOrDown: '',
      time: 100000,
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

  getTimeLimit(number) {
    const minute = parseInt(number/60);
    const second = (number % 60).toString().padStart(2, '0');
    return minute + ':' + second;
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
    const strLat = this.props.target.location.latitude.toString();
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
    } else if (first.length === 0 || second.length === 0 || third.length === 0) {
      alert('write answers!')
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
    const strLat = this.props.target.location.latitude.toString();
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
              <p>{this.getTimeLimit(this.state.time)}</p>
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
            key={this.props.target.name}
            className="oppMarker"
            latitude={Number(this.props.target.location.latitude)}
            longitude={Number(this.props.target.location.longitude)}
            anchor="bottom"
          >
          {/* <img src={this.props.target.photo} /> */}
          </Marker>
        </ReactMapGL>
        <div className="quizWrapper">
          <div>
          {
            <div className="quiz">
              <p className="given_longitude">{this.props.target.location.longitude}</p>
              <div className="quiz-latitude">
                <p className="given_latitude">{quizLat}</p>
                <div className="answer-box">
                  <input
                    type="text"
                    className="answer"
                    maxLength="1"
                    ref={(first) => this.first = first}
                    value={this.state.first}
                    onChange={this.handleFirst}
                  />
                  <div className="bubbly" />
                </div>
                <div className="answer-box">
                  <input
                    type="text"
                    className="answer"
                    maxLength="1"
                    ref={(second) => this.second = second}
                    value={this.state.second}
                    onChange={this.handleSecond}
                  />
                  <div className="bubbly" />
                </div>
                <div className="answer-box">
                  <input
                    type="text"
                    className="answer"
                    maxLength="1"
                    ref={(third) => this.third = third}
                    value={this.state.third}
                    onChange={this.handlethird}
                  />
                  <div className="bubbly" />
                </div>
                
              </div>
            </div>
          }
            <button
              type="submit"
              value="Submit"
              className="submitBtn bubbly-button"
              onClick={this.distinguishCorrectAnswer.bind(this)}
            >
              submit
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
