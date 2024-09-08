import React from 'react'

function PropDrilling() {
  const value = 10;
  return (
  <>   
   <ParentHeader value={value} />
   </>

  )
}
const ParentHeader = (props) => {
  const value = props.value;
  return(
  <div>
    <Header value={value}></Header>
  </div>
  )
}
const Header = (props) => {
  const value = props.value;
  return(
  <div>
    <Childeren value={value}></Childeren>
  </div>
  )
}
const Childeren = (props) => {
  const value = props.value;
  return(
  <div>
    <h1>parent value is:{value}</h1>
  </div>
  )
}


export default PropDrilling

