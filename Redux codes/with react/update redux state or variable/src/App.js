import React,{useState} from 'react';
import './App.css';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';
import UserView from './features/users/UserView';


function App() {
  return (
    <div className="App">
      <CakeView/>
      <IcecreamView/>
      <UserView/>
    </div>
  );
}

export default App;


// installed package 
// 1) npm i axios @reduxjs/toolkit
// 2) npm install react-redux
// 3) import redux dev tool in chrome


