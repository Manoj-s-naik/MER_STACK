// app/product/[id]/page.tsx

type Props = {
  params: { id: string };
};
type Product = {
  title: string;
  price: number;
  description: string;
};

const ProductIdPage = async ({ params }: Props) => {
  const { id } = params;
  const interval = setInterval(() => {
    console.log("this runs every 1 second");
  }, 5000);
  clearInterval(interval);
  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  const product: Product = await res.json();

  return (
    <div>
      <h1>{product.title}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
};

export default ProductIdPage;
