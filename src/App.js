import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Content from './components/Profile/Profile';
import Dialogs from './components/Diaologs/Dialogs';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <div className='app-wrapper-content'>
        <Dialogs />
        {/* <Content /> */}
      </div>
    </div>
  );
}

export default App;
