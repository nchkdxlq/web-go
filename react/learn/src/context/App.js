import React, { Component } from 'react';
import Profile from './Profile';
import Home from './Home'
import UserContext from './UserContext';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "App 康康",
      level: 99
    };
  }

  render() {
    return (
      <div>
        <UserContext.Provider value={ {...this.state} }>
          <Home />
        </UserContext.Provider>
      </div>
    )
  }
}
