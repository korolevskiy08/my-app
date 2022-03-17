import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addPost, updateNewPostText, selectPostToChange } from './redux/state';


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <React.StrictMode>
        <App state={state} addPost={addPost} selectPostToChange={selectPostToChange} updateNewPostText={updateNewPostText}/>
      </React.StrictMode>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

