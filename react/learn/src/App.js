import React, { Component } from 'react'

export default class App extends Component {

  constructor(props) {
    super(props);
    console.log('constructor');
    
    this.state = {
      count: 0
    };
  }


  componentDidMount() {
    console.log('componentDidMount');
  }

  componentDidUpdate(preProps, preState, snapshot) {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    const { count } = this.state;

    return (
      <div>
        {"我是App组件"}
        <h2>当前技术: {count}</h2>
        <button onClick={ e => {this.increment()} }>+1</button>
      </div>
    )
  }

  increment() {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }
}

