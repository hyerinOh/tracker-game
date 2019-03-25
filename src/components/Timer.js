import React, { Component } from 'react';

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: '00',
      minutes: '',
    };

    this.secondsRemaining;
    this.intervalHandle;
    this.handleChange = this.handleChange.bind(this);
    // method that triggers the countdown functionality
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.startCountDown = this.startCountDown.bind(this);
  }

  handleChange(event) {
    this.setState({
      minutes: event.target.value,
    });
  }

  tick() {
    const min = Math.floor(this.secondsRemaining / 60);
    const sec = this.secondsRemaining - (min * 60);
    this.setState({
      minutes: min,
      seconds: sec,
    });

    if (sec < 10) {
      this.setState({
        seconds: `0 + ${this.state.seconds}`,
      });
    }
    if (min < 10) {
      this.setState({
        value: `0' + ${min}`,
      });
    }
    if (min === 0 && sec === 0) {
      clearInterval(this.intervalHandle);
    }
      this.secondsRemaining--;
  }

  startCountDown() {
    this.intervalHandle = setInterval(this.tick, 1000);
    const time = this.state.minutes;
    this.secondsRemaining = time * 60;
  }
}
