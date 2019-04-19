import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const stateChanger = (state, action) => {//控制state的操作
    if (state === undefined) {
        return {n: 0}//n方便獲取
    } else {
        if (action.type === 'add') {
            var newState = {n:state.n + action.payload}
            return newState
        }else if(action.type === 'minus'){
            var newState = {n:state.n - action.payload}
            return newState
        }
        else {
            return state
        }
    }

    return newState//這有啥用啊？
}

const store = createStore(stateChanger)




ReactDOM.render(
  <Provider store={store}> 
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
