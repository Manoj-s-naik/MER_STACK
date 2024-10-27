
import React from "react";

async function fetchProducts(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await response.json();
  return data;
}

async function MovieData(props) {
  const movieID = props.params.id;
  const productData = await fetchProducts(movieID);
  console.log("productData",productData);

  return (
    <>
      <div>movie page :{movieID}</div>
      <h1>product name:{productData.price}</h1>
      <h2>product title:{productData.title}</h2>
    </>
  );
}

export default MovieData;
