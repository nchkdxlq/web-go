import React, { Component } from 'react'
import ReduxPage from './redux/index'


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
        <ReduxPage />
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

