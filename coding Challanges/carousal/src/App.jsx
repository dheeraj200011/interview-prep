import { useEffect, useState } from "react";
import Carousal from "./components/Carousal";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async (imageLimit) => {
      try {
        setLoading(true);
        let response = await fetch(
          `https://jsonplaceholder.typicode.com/photos?_limit=${imageLimit}`,
        );
        let result = await response.json();
        setImages(result);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages(8);
  }, []);

  return (
    <div>
      <Carousal images={images} isLoading={loading} />
    </div>
  );
};

export default App;
