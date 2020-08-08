import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer } from './reducer';


// 应用一些中间件
// 1. 
// 2. 创建sagaMiddleware中间件
const storeEnhancer = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, storeEnhancer);

// export store; 这样导出报错编译错误，原因是什么？
export default store;
