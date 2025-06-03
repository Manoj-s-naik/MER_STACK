"use client";
import React from "react";

function Cart() {
  const addCartHandler: React.MouseEventHandler<
    HTMLButtonElement
  > = async () => {
    console.log("item added to the cart");
  };
  return (
    <>
      <button className="bg-blue-400 p-4 rounded-2xl" onClick={addCartHandler}>
        Add to cart
      </button>
    </>
  );
}

export default Cart;
