import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <div key={index} className="image-item">
          <img src={img.src} alt={`Component ${index}`} />
          {img.overlayText && <span className="overlay-text">{img.overlayText}</span>}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
