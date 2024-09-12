import React from 'react'

const InputBox = (props) => {
    const inputHandler = props.inputHandler;
    const addTask = props.addTask;
    const value = props.value;
    const tasks =props.tasks
    return (
      <div className="inputContainer">
        <input type="text" onChange={inputHandler} value={value} />
        <button onClick={addTask} tasks={tasks}>
          Add task
        </button>
      </div>
    );
  };
  

export default InputBox