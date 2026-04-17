import React from "react";

const Carousal = ({
  images,
  isLoading,
  imagePerSlide = 1,
  imageLimit = images.length - 1,
}) => {
  console.log(images);
  return isLoading ? (
    <div>Loading</div>
  ) : (
    <div className="carousal">
      <div className="image-container">
        {images.slice(0, imageLimit).map((image) => {
          return (
            <img
              className="image"
              key={image.id}
              src={image.url}
              alt={image.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Carousal;
