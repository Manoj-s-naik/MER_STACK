import React, { useState } from 'react'

function InputCounter() {
    const [count,setcount]= useState(0);
    const [value,setvalue]= useState("");
    const [delta,setdelta]= useState(1);

    const increment =()=>{
        setcount(count+delta);
    }
    const decrement =()=>{
        setcount(count-delta);
    }
    const inputHandler = (e)=>{
       setvalue(e.target.value);
    }
    const updateDeltaHandler = ()=>{
        setdelta(Number(value));
        setvalue("")
    }

  return (
    <>
    <div style={{display:"flex" ,gap:"5px"}}>
        <input type="text" onChange={inputHandler} value={value}/>
        <button onClick={updateDeltaHandler}>Update delta</button>
    </div>
    <div style={{height:"100vh", width:"100vw",display:"flex",alignItems:"center",justifyContent:'center', gap:"1rem"}}>
    <button onClick={increment}>+</button>
    <p>{count}</p>
    <button onClick={decrement}>-</button>
    </div>
    </>
  )
}

export default InputCounter