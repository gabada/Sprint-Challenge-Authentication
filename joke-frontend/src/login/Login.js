import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Login = props => {
  const endpoint = 'http://localhost:3300/api/login';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <h1>Login</h1>
      {props.loginMessage && <h2>{props.loginMessage}</h2>}
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post(endpoint, { username, password })
            .then(res => {
              localStorage.setItem('token', res.data.token);
              props.history.push('/jokes');
            })
            .catch(error => {
              console.error('LOGIN ERROR', error);
            });
        }}
      >
        <input
          type='text'
          placeholder='username'
          onChange={e => setUsername(e.target.value)}
          name='username'
          value={username}
        />
        <input
          type='password'
          placeholder='password'
          onChange={e => setPassword(e.target.value)}
          name='password'
          value={password}
        />
        <button type='submit'>Login to Laugh!</button>
      </form>
    </>
  );
};

export default withRouter(Login);
