import React from "react";

const Counter = () => {
  const cart = ["apple", "banana", "cherrey"];
  return (
    <div>
      <ul>
        {cart.map((fruit) => (
          <li key={fruit}>
            {fruit}
            <div>
              <button>click me</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Counter;
