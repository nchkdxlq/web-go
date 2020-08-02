import React, { PureComponent } from 'react'
import Home from './pages/Home3'
import Profile from './pages/Profile3'
import StoreContext from './utils/context'
import Store from './store/index'
import { Provider } from 'react-redux'

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <Home />
          <Profile />
        </div>
      </Provider>
    )
  }
}

