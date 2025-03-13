import React from "react";
import image1 from "../../assets/image/defect1.png";
import image2 from "../../assets/image/defect2.jpg";   
import image3 from "../../assets/image/image3.jpg";
import image4 from "../../assets/image/image4.png";
import image5 from "../../assets/image/image5.png";
import image6 from "../../assets/image/image6.jpg";
import image7 from "../../assets/image/image7.jpg";
import image8 from "../../assets/image/image8.jpg";
import image9 from "../../assets/image/image9.jpg";
import image10 from "../../assets/image/image10.jpg";
import image11 from "../../assets/image/image11.jpg";
import image12 from "../../assets/image/image12.jpg";


const images = [
  { src: image1, overlayText: "AI: 95%" },
  { src: image2, overlayText: "AI: 95%" },
  { src: image3, overlayText: "AI: 95%" },
  { src: image4, overlayText: "AI: 95%" },
  { src: image5, overlayText: "AI: 95%" },
  { src: image6, overlayText: "AI: 95%" },
  { src: image7, overlayText: "AI: 95%" },
  { src: image8, overlayText: "AI: 95%" },
  { src: image9, overlayText: "AI: 95%" },
  { src: image10, overlayText: "AI: 95%" },
  { src: image11, overlayText: "AI: 95%" },
  { src: image12, overlayText: "AI: 95%" },
]


const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <div key={index} className="image-item">
          <img src={img.src} alt={`Component ${index}`} />
          {/* {img.overlayText && <span className="overlay-text">{img.overlayText}</span>} */}
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
