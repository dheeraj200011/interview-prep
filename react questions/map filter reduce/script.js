const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 25,
    description: "Ergonomic wireless mouse with long battery life",
    image: "https://example.com/images/mouse.jpg",
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 1999,
    category: "Electronics",
    stock: 15,
    description: "Noise-cancelling over-ear headphones",
    image: "https://example.com/images/headphones.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 3499,
    category: "Wearables",
    stock: 10,
    description: "Fitness tracking smartwatch with AMOLED display",
    image: "https://example.com/images/smartwatch.jpg",
  },
  {
    id: 4,
    name: "Backpack",
    price: 1299,
    category: "Accessories",
    stock: 30,
    description: "Water-resistant laptop backpack",
    image: "https://example.com/images/backpack.jpg",
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    price: 2599,
    category: "Electronics",
    stock: 12,
    description: "RGB mechanical keyboard with blue switches",
    image: "https://example.com/images/keyboard.jpg",
  },
];

const names = ["Alice", "Bob", "Alice", "Charlie", "Bob"];

const App = () => {
  return (
    <>
      {products
        .filter((item) => item.category === "Electronics")
        .map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p>{item.description}</p>
            </div>
          );
        })}

      {/* get me the total price of all products */}

      {products.reduce((acc, product) => {
        return acc + product.price;
      }, 0)}

      {products
        .filter((item) => item.price > 1300)
        .map((item) => {
          return {
            ...item,
            discountedPrice: item.price - (item.price * 10) / 100,
          };
        })
        .map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.category}</p>
              <p>{item.description}</p>
              <p>{item.discountedPrice}</p>
            </div>
          );
        })}

      {names
        .filter((item, index) => names.indexOf(item) === index) // item ka index agar index ke equal hai to whi return hoga
        // indexof me item ke last index store ho jati hai to gar wo repeat hua to uska index equla nhi hoga to wo return nhi hoga
        .map((item, i) => {
          return (
            <div key={i}>
              <p>{item}</p>
            </div>
          );
        })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
