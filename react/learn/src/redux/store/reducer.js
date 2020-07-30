import {
  ACTION_ADD_NUMBER,
  ACTION_SUB_NUMBER
} from './constants'



const defaultState = {
  counter: 0
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ACTION_ADD_NUMBER:
      return { ...state, counter: state.counter + action.num };
    
    case ACTION_SUB_NUMBER:
      return { ...state, counter: state.counter - action.num };

    default:
      return state;
  }
}