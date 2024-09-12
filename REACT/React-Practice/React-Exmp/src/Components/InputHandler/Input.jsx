import { useState } from "react";
import "./input.css";

const InputBox = () => {
  const [value, setValue] = useState("");
  const HandleAlert = () => {
    alert(value)
    setValue("");
  };

  const HandleChange = (obj) => { 
    const updateValue = obj.target.value;
    setValue(updateValue);

  };

  return (
    <div className="InputParent">
      {/*handlechange provide obj ,its inbuilt*/}
      <input type="text" value={value} onChange={HandleChange} />{" "}
      <button onClick={HandleAlert}>Alert button</button>
    </div>
  );
};
export default InputBox;
