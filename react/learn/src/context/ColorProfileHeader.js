import React, { PureComponent } from 'react'
import UserContext from './UserContext'
import ThemeContext from './ThemeContext'

export default class ColorProfileHeader extends PureComponent {
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          { ( theme ) => {
            return (
              <UserContext.Consumer>
                { ( user ) => {
                  return (
                    <div>
                      <h2 style={{color:theme.color}}>name={user.name}</h2>
                      <h2>level={user.level}</h2>
                    </div>
                  )
                }}
              </UserContext.Consumer>
            )
          }}
        </ThemeContext.Consumer>
      </div>
    )
  }
}
