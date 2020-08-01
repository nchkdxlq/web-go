import {
  ACTION_ADD_NUMBER,
  ACTION_SUB_NUMBER,
  ACTION_DECREMENT, 
  ACTION_INCREMENT,
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
    
    case ACTION_DECREMENT:
      return { ...state, counter: state.counter - 1 };
    
    case ACTION_INCREMENT:
      return { ...state, counter: state.counter + 1 };
      
    default:
      return state;
  }
}