import React, { useEffect, useState } from "react";

const LoadMore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

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

      console.log(result.products);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 30) {
      setDisableButton(true);
    }
  });

  if (loading) {
    return <div className="wrapper">Loading Data... Please wait</div>;
  }

  return (
    <div className="wrapper ">
      <div className="grid grid-cols-6">
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
      <div>
        <button
          className={`btn ${disableButton ? "hidden" : "block"}`}
          disabled={disableButton}
          onClick={() => setCount(count + 1)}
        >
          Load More Products
        </button>
        {disableButton ? <p>You have reached the limit</p> : null}
      </div>
    </div>
  );
};

export default LoadMore;
