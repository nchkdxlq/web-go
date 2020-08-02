import React from 'react'
import { decAction, subNumAction } from '../store/actionCreators'
import connect from '../utils/connect'

function Home(props) {
  return (
    <div>
      <h2>Home2</h2>
      <h2>当前计数:{props.counter}</h2>
      <button onClick={e => props.decrement() }>-1</button>
      <button onClick={e => props.subNumber(5)}>-5</button>
      <hr/>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    decrement: function() {
      dispatch(decAction());
    },
    subNumber: function(num) {
      dispatch(subNumAction(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);