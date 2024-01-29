const store = require('./app/store');
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions
const fetchUsers= require("./features/users/userSlice").fetchUsers

console.log("Initial State", store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("Updated State", store.getState())
});;;;;;;;;

store.dispatch(fetchUsers())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.restocked(3))

// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.ordered())
// store.dispatch(icecreamActions.restocked(2))

// unsubscribe()

// installed package
// 1) npm init --yes
// 2) npm i @reduxjs/toolkit
// 3) npm i redux-logger