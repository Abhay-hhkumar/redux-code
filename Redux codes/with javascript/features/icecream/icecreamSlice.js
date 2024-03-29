const { cakeActions } = require('../cake/cakeSlice');

const createSlice = require('@reduxjs/toolkit').createSlice

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
        builder.addCase(cakeActions.ordered, state=>{
            state.numOfIcecreams--
        })
    }

});

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions