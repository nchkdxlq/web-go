import React, { PureComponent } from 'react'
import store from '../store/index'
import { addNumAction, subNumAction } from '../store/actionCreators'


export default class Home extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      const { counter } = store.getState();
      this.setState({
        counter
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }


  render() {
    const { counter } = this.state;

    return (
      <div>
        <h2>Home</h2>
        <h2>当前计数:{counter}</h2>
        <button onClick={e => { this.subNumber() }}>-1</button>
        <button onClick={e => { this.addNumber() }} >+3</button>
        <hr/>
      </div>
    )
  }

  subNumber() {
    store.dispatch(subNumAction(1));
  }

  addNumber() {
    store.dispatch(addNumAction(5));
  }

}
