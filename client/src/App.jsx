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
  }

  componentDidMount() {
    setTimeout(this.socketListener, 300);
  }

  socketListener() {
    socket.on('message', (message) => {
      this.setState({
        clickNum: message,
      });
    });
  }

  incrementClick(num) {
    socket.emit('clickIncrement', num);
    // axios.post('/', { num })
    // .then((results) => {
    // this.setState({
    // clickNum: results.data,
    // });
    // });
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
