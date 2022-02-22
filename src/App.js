import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Content from './components/Profile/Profile';


const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Nav />
      <Content />
    </div>
  );
}

export default App;
