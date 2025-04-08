import React from "react";
import { images } from "../../constants/constants";

const ImageGrid = ({setPopupOpen,setComponentImage}) => {
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <div key={index} className="image-item">
          <img src={img.src} alt={`Component ${index}`} onClick={()=>{
            setComponentImage(img.src);
            setPopupOpen(true);
          }} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
