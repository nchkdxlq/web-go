import UserContext from './UserContext'
import React from 'react'

export default function UserModify(props) {
  return (
    <div>
      <UserContext.Consumer>
        { value => {
            return (
              <div>
                <h2>UserModify</h2>
                <h3>name:{value.name}</h3>
                <h3>level:{value.level}</h3>
              </div>
            ) 
        }}
      </UserContext.Consumer>
    </div>
  )
}

/*
什么时候使用Context.Consumer

1. 当使用value的组件是一个函数组件时

2. 当组件中需要使用多个Context时

*/