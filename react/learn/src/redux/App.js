import React, { PureComponent } from 'react'
import Home from './pages/Home2'
import Profile from './pages/Profile2'

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    )
  }
}

