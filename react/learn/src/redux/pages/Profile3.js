import React from 'react';
import { addNumAction, incAction } from '../store/actionCreators'
// import connect from '../utils/connect'
import { connect } from 'react-redux'


function Profile(props) {
  return (
    <div>
      <h2>Profile 3</h2>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={ e => props.increment() }>+1</button>
      <button onClick={ e => props.addNumber(5) } >+5</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(incAction()),
    addNumber: num => dispatch(addNumAction(num))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Profile);