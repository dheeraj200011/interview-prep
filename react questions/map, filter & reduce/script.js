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

const App = () => {
  return (
    <>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
