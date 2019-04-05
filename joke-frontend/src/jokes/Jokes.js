import React from 'react';
import axios from 'axios';

import './jokes.css';

import requiresAuth from '../auth/requiresAuth';

class Jokes extends React.Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <>
        <h1>How about those Dad Jokes?</h1>
        <ul>
          {this.state.jokes.map(j => (
            <div key={j.id}>
              <li>
                <strong>Joke: </strong>
                {j.joke}
              </li>
              <p />
            </div>
          ))}
        </ul>
      </>
    );
  }

  componentDidMount() {
    const endpoint = `/jokes`;
    axios
      .get(endpoint)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(error => {
        console.error('JOKE ERROR (This is not a joke)', error);
      });
  }
}

export default requiresAuth(Jokes);
