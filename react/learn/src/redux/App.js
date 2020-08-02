import React, { PureComponent } from 'react'
import Home from './pages/Home2'
import Profile from './pages/Profile2'
import StoreContext from './utils/context'
import Store from './store/index'

export default class App extends PureComponent {
  render() {
    return (
      <StoreContext.Provider value={Store}>
        <div>
          <Home />
          <Profile />
        </div>
      </StoreContext.Provider>
    )
  }
}

