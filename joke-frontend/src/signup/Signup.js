import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Signup = props => {
  const endpoint = 'http://localhost:3300/api/register';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <h1>Sign up now!</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post(endpoint, { username, password })
            .then(res => localStorage.setItem('token', res.data))
            .then(() => props.history.push('/jokes'));
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
        <button type='submit'>Sign up for jokes!</button>
      </form>
    </>
  );
};

export default withRouter(Signup);
