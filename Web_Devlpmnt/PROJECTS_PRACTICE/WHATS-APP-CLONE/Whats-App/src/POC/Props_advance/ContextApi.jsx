import React from 'react'


const contextWrapper =React.createContext();

function ContextApi() {
  const value = "manoj";
  return (
    <div>ContextApi</div>
    
  )
}

function ParentHeader (){
  return <>
  <div>ParentHeader value is:-</div>
  </>
}
function Parent (){
  return <>
  <div>Header value is:-</div>
  </>
}
function Child (){
  return <>
  <div>child value is:-</div>
  </>
}

export default ContextApi