import React from "react";

async function getProducts() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  return data.products;
}
type Products = {
  id: number;
  title: String;
  description: String;
  price: number;
};
export default async function Product() {
  const products: Products[] = await getProducts();
  return (
    <>
      <table className="border">
        <thead>
          <tr className="border">
            <th>
              <div>products title</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, id) => (
            <tr key={id}>
              <td className="border">{product.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
