import { createSlice } from '@reduxjs/toolkit';


const initialState={
    numOfCakes: 10
}

// note:
// createSlice aautomatically generate action creator as the same name as the reducer function we have written
// here cakeSlice generate "cake/ordered" action
const cakeSlice = createSlice({
    name:'cake',
    initialState: initialState,
    reducers: {
        ordered: (state,action)=>{
        state.numOfCakes--
    },
    restocked: (state, action)=>{
        state.numOfCakes += action.payload
    }}
});

export default cakeSlice.reducer
export const {ordered, restocked} = cakeSlice.actions

//here reducer and restocked are two different reducer with perform calculations