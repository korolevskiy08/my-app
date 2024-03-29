import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

console.log(store.getState())
let rerenderEntireTree = (state) => {
  console.log(state)
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}


rerenderEntireTree(store.getState());
store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
}

)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

