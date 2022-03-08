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
            dialogsData={props.dialogsData}
            messageData={props.messageData} />} />

          <Route path='/Profile/*' element={<Profile
          postData={props.postData} />} />

        </Routes>
      </div>
    </div>

  );
}

export default App;
