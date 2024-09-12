import { useState } from "react";
import ParentCounter from "./Components/ParentCounter";
import SayHello from "./Components/SayHello";
import InputBox from "./Components/InputHandler/Input";
function App() {
  return (
    <>
      <div>
        <SayHello></SayHello> 
        {/* <ParentCounter></ParentCounter> */}
        <InputBox></InputBox>

      </div>
    </>
  );
}

export default App;
