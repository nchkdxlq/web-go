import React, { PureComponent } from 'react'
import Profile from './Profile';
import UserContext from './UserContext';
import ThemeContext from './ThemeContext';

export default class Home extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Provider value={{color:'green'}}>
          <UserContext.Provider value={ {name:'Home 康康', level:97} }>
            <Profile />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </div>
    )
  }
}
