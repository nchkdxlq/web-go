import React, { PureComponent } from 'react'
import UserContext from './UserContext';

export default class ProfileHeader extends PureComponent {
  render() {
    const { name, level } = this.context;
    return (
      <div>
        <h3>name: {name}</h3>
        <h3>level: {level}</h3>
      </div>
    )
  }
}

// 设置contextType
ProfileHeader.contextType = UserContext;

/*
1. 如果一个组件订阅了Context, 那么这个组件会从离自身最近的那个匹配的`Provider`中读取当前context的值

2. 组件在顶层查找过程中没有找到对应的`Provider`, 那么就使用`defaultValue`。

*/