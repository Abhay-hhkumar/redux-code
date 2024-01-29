import React from 'react'
import {  useDispatch,useSelector } from 'react-redux'
import { ordered,restocked } from './cakeSlice';
const CakeView = () => {
    // useSelector accepts a function as its parameter
    // and this inner function receive redux state as argument
    // useSelectore return the thing whatever its inner function returns
   const numOfCakes= useSelector((state)=> state.cake.numOfCakes);

   const dispatch=useDispatch()
  return (
    <div>
      <h2>Number of cakes-{numOfCakes}</h2>
      <button onClick={()=> dispatch(ordered())}>Order Cake</button>
      <button onClick={()=> dispatch(restocked(5))}>Restore Cake</button>
    </div>
  )
}

export default CakeView
