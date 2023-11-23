import React, { useState, useEffect } from "react";
import "./Banner.css";
import B1 from "../../Img/B1.jpg";
import B2 from "../../Img/B2.jpg";
import B3 from "../../Img/B3.jpg";

function Banner() {
  const [index, setIndex] = useState(0);

  const images = [B1, B2, B3];

  const nextImage = () => {
    setIndex((index + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setTimeout(nextImage, 5000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="banner">
      <img src={images[index]} alt={`Image ${index + 1}`} />
      <div className="banner-text">
        <p className="line-1">Bringing A</p>{" "}
        <p className="line-2">Colorful Touch</p>
        <p className="line-3">To Your Home</p>
      </div>
      <button onClick={prevImage} className="left-arrow"></button>
      <button onClick={nextImage} className="right-arrow"></button>
    </div>
  );
}
export default Banner;
