import React from 'react';
import axios from 'axios';

const socket = io();

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickNum: 0,
    };
    this.socketListener = this.socketListener.bind(this);
    this.newUserListener = this.newUserListener.bind(this);
  }

  componentDidMount() {
    setTimeout(this.newUserListener, 300);
    setTimeout(this.socketListener, 300);
  }

  newUserListener() {
    const { clickNum } = this.state;
    socket.on('newUser', () => {
      socket.emit('message', clickNum);
    });
  }

  socketListener() {
    socket.on('message', (message) => {
      this.setState({
        clickNum: message,
      });
    });
  }

  incrementClick(num) {
    num++;
    socket.emit('clickIncrement', num);
  }

  render() {
    const { clickNum } = this.state;
    return (
      <button
        type="button"
        onClick={(event) => { this.incrementClick(event.target.innerText); }}
      >
        {clickNum}
      </button>
    );
  }
}

export default App;
