import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      clickNum: 0,
    };
  }

  incrementClick(num) {
    axios.post('/', { num })
      .then((results) => {
        this.setState({
          clickNum: results.data,
        });
      });
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
