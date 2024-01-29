import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered,restocked } from './icecreamSlice';
const IcecreamView = () => {

    const numOfIcecreams= useSelector((state)=> state.icecream.numOfIcecreams);

    const dispatch=useDispatch();
  return (
    <div>
      <h2>Number of Ice creams-{numOfIcecreams}</h2>
      <button onClick={()=> dispatch(ordered()) }>Order Ice creams</button>
      <button onClick={()=> dispatch(restocked(3))}>Restore Ice creams</button>
    </div>
  )
}

export default IcecreamView
