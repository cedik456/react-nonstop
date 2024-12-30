import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/?limit=10&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }

      console.log(result);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div className="wrapper">Loading Data... Please wait</div>;
  }

  return (
    <div className="wrapper ">
      <div className="grid grid-cols-5">
        {products && products.length
          ? products.map((product) => (
              <div className="m-3 shadow-md" key={product.id}>
                <img
                  className="w-44"
                  src={product.thumbnail}
                  alt={product.title}
                />
              </div>
            ))
          : null}
      </div>
      <div className="btn">
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
};

export default LoadMore;
