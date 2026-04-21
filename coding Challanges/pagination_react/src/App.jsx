import React, { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";

const App = () => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(1);

  const fetchProducts = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=100");
    const data = await res.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className="products">
        {products?.slice(pages * 10 - 10, pages * 10).map((prod) => {
          return (
            <div className="products__single" key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <p>{prod.title}</p>
            </div>
          );
        })}
      </div>

      <Pagination products={products} pages={pages} setPages={setPages} />
    </div>
  );
};

export default App;
