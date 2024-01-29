//const { cakeActions } = require('../cake/cakeSlice');

import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';
//const createSlice = require('@reduxjs/toolkit').createSlice

const initialState ={
    numOfIcecreams: 20,
}

const icecreamSlice= createSlice({
    name: 'icecream',
    initialState: initialState,
    reducers: {
        ordered: (state,actions)=>{
            state.numOfIcecreams--
        },
         restocked: (state, actions)=>{
                state.numOfIcecreams += actions.payload
              }
        },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered, state=>{
            state.numOfIcecreams--
        })
    }

});

export default icecreamSlice.reducer
export const {ordered, restocked} = icecreamSlice.actions