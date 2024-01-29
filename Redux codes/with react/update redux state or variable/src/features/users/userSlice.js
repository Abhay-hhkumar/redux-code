import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

// const createSlice = require('@reduxjs/toolkit').createSlice
// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk
const axios =require('axios');





const initialState={
    loading: false,
    users: [],
    error: ''
}

// createAsyncThunk need two parameter
// 1) action name
// 2) callback function that create the payload

// more createAcync thunk will dispatch the promise lifecycle action that we can listen them by using 'extraReducers'
// the lifecycle include "fulfilled" and "rejected"
// "pending" for when request is made 
// "fulfilled" when the request succeed
// "rejected" when the request failed

// within each reducer function you can perform the necessary state transitions
// export the reducer as the default export and the fetch users function as a named export
export const fetchUsers = createAsyncThunk('user/fetchUsers', ()=>{
         return axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response=> response.data.map((user)=> user.id))
})


const userSlice=createSlice({
    name: 'user',
    initialState : initialState,
    extraReducers: (builder)=>{
        builder.addCase(fetchUsers.pending, (state)=>{
            state.loading=true
        })
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{


            state.loading=false
            state.users=action.payload
            state.error=''
        })
        builder.addCase(fetchUsers.rejected, (state, action)=>{
            state.loading = false
            state.users=[]
            state.error= action.error.message
        })
    }
});
export default userSlice.reducer
// module.exports.fetchUsers=fetchUsers