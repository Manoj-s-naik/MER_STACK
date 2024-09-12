import React from "react";
const ListItem = (props) => {
  const delBtn = props.delBtn;
  const tasks = props.tasks;
  return (
    <ul className="list">
      {tasks.map((item, index) => {
        return (
          <li key={index}>
            <span>{item}</span>

            <button
              onClick={() => {
                delBtn(index);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ListItem;
