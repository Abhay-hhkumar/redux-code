import React from 'react';
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

// moto => we have a shop in which we sell cake and icecreem
// inthis shop we have two shopkeeper(i.e two reducers {one reducer handle cake only and other one is handle icecreem only})
// 1) here we order cake(i.e perform action)
      // then we give cake to customer and one icecreem free(i.e when we order cake then one cake get reduce and one icecream get reduce)
// 2) whenever we press "restock" then we increment the cake stock or icecream stock by the passed value
// 3) here when we order icecream then only number of icecream get reduce by 1

// installed package 
// 1) npm i axios @reduxjs/toolkit
// 2) npm install react-redux
// 3) import redux dev tool in chrome


