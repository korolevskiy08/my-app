import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Diaologs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {

  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Routes>

          <Route path='/Dialogs/*' element={<Dialogs
            state={props.state.dialogsPage} />} />

          <Route path='/Profile/*' element={<Profile
          state={props.state.profilePage} />} />

        </Routes>
      </div>
    </div>

  );
}

export default App;
