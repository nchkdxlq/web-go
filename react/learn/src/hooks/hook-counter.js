import React, { useState } from 'react'

export default function HookCounter() {

  // const arr = useState(0)
  // const state = arr[0]
  // const setState = arr[1]

  // 数组解构
  const [count, setCount] = useState(0)
  return (
    <div>
      <h2>HookCounter</h2>
      <h2>当前计数：{count}</h2>
      <button onClick={ e => setCount(count + 1)}>+1</button>
      <button onClick={ e => setCount(count - 1)}>-1</button>
    </div>
  )
}
