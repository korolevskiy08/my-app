import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Diaologs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Setting from './components/Setting/Setting';

const App = (props) => {
  console.log(props.state.profilePage)
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />

      <div className='app-wrapper-content'>
        <Routes>

          <Route path='/Dialogs/*' element={<Dialogs
            store={props.store}
            state={props.state.dialogsPage} />} />

          <Route path='/Profile/*' element={<Profile
            // selectPostToChange={props.selectPostToChange}
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} />

          <Route path='/News/*' element={<News />} />

          <Route path='/Music/*' element={<Music />} />

          <Route path='/Setting/*' element={<Setting />} />

        </Routes>
      </div>
    </div>

  );
}

export default App;
