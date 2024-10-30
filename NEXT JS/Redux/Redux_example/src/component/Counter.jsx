import React, { useState } from 'react'

function Counter() {
    const [count,setcount]= useState(0);

    const increment =()=>{
        setcount(count+1);
    }
    const decrement =()=>{
        setcount(count-1);
    }
  return (
    <>
    <div style={{height:"100vh", width:"100vw",display:"flex",alignItems:"center",justifyContent:'center', gap:"1rem"}}>
    <button onClick={increment}>+</button>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
    </div>
    </>
  )
}

export default Counter