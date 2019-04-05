import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import './App.css';
import Signup from './signup/Signup';
import Login from './login/Login';
import Jokes from './jokes/Jokes';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to='/signup'>Signup</NavLink>
            &nbsp;|&nbsp;
            <NavLink to='/login'>Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to='/jokes'>Jokes</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/jokes' component={Jokes} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };
}

export default withRouter(App);
