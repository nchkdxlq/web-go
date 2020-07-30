import { createStore, Store } from 'redux';
import { reducer } from './reducer'

const store = createStore(reducer);

// export store; 这样导出报错编译错误，原因是什么？


export default store;
