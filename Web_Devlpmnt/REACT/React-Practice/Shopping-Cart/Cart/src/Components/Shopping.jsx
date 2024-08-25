import { useState } from "react";
import "./Shopping.css";
import InputBox from "./InputBox";
import ListItem from "./ListItem";

const Shopping = () => {
  const [value, setValue] = useState("");

  const [tasks, setTask] = useState([]);

  const inputHandler = (obj) => {
    const liContent = obj.target.value;
    setValue(liContent);
    // console.log(liContent);
  };

  const addTask = () => {
    const newArray = [];
    for (let i = 0; i < tasks.length; i++) {
      newArray.push(tasks[i]);
    }
    newArray.push(value);
    setTask(newArray);
    // console.log(newArray);
    setValue("");
  };

  const delBtn = (index) => {
    const filterArr = [];
    for (let i = 0; i < tasks.length; i++) {
      if (i != index) {
        filterArr.push(tasks[i]);
      }
    }

    setTask(filterArr);
    // console.log(index);
  };

  return (
    <div className="shoppingList">
      <InputBox
        inputHandler={inputHandler}
        value={value}
        addTask={addTask}
      ></InputBox>
      <h2>Shopping Cart</h2>
      <ListItem delBtn={delBtn} tasks={tasks}></ListItem>
    </div>
  );
};
export default Shopping;
