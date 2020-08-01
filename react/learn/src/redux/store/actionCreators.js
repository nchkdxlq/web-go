
import { 
  ACTION_ADD_NUMBER, 
  ACTION_SUB_NUMBER,
  ACTION_DECREMENT,
  ACTION_INCREMENT
} from './constants'

export const addNumAction = (num) => {
  return { type: ACTION_ADD_NUMBER, num }
}

export const subNumAction = (num) => {
  return { type: ACTION_SUB_NUMBER, num };
}

export const decAction = () => {
  return { type: ACTION_DECREMENT, num: -1 };
}

export const incAction = () => {
  return { type: ACTION_INCREMENT, num: 1 };
}