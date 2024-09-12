import React, { useContext } from "react";

const ContextWrapper = React.createContext();

function ContextApi() {
  const value = "manoj";
  return (
    <>
      <div>ContextApi</div>
      <ContextWrapper.Provider value={value}>
        <Parent></Parent>
        <Child></Child>
      </ContextWrapper.Provider>
    </>
  );
}

function ParentHeader() {
  return (
    <>
      <div>ParentHeader value is:-</div>
    </>
  );
}
function Parent() {
  const messageValue = useContext(ContextWrapper);
  return (
    <>
      <div>Parent value is:-{messageValue}</div>
    </>
  );
}
function Child() {
 const value = useContext(ContextWrapper);
  return (
    <>
      <div>child value is:-{value}</div>
    </>
  );
}

export default ContextApi;
