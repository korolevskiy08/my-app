import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const postData = [
  { id: 1, message: 'Hi, how are you?', likeCount: 20 },
  { id: 2, message: "It's my first post", likeCount: 15 }
]

let dialogsData = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Zhenya'},
  {id: 3, name: 'Marusia'},
  {id: 4, name: 'Pablo'},
  {id: 5, name: 'Alexey'},
]

let messageData = [
  {id: 1, message: 'hi'},
  {id: 2, message: 'how are you?'},
  {id: 3, message: "I don't no"},
  {id: 4, message: 'bla bla'},
  {id: 5, message: 'bla bla bla'},
]

ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
