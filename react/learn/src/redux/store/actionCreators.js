
import { 
  ACTION_ADD_NUMBER, 
  ACTION_SUB_NUMBER 
} from './constants'

export const addAction = (num) => {
  return { type: ACTION_ADD_NUMBER, num }
}

export const subAction = (num) => {
  return { type: ACTION_SUB_NUMBER, num };
}