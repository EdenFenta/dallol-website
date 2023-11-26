import React from "react";
import "./Catalog.css";
import "../../Img/C1.jpg";
import "../../Img/C2.jpg";
import "../../Img/C3.jpg";
import "../../Img/C4.jpg";
import "../../Img/C5.jpg";
import "../../Img/C6.jpg";
import "../../Img/C7.jpg";

const images = [
  { url: "../../Img/C1.jpg", title: "title1" },
  { url: "../../Img/C2.jpg", title: "title2" },
  { url: "../../Img/C3.jpg", title: "title2" },
  { url: "../../Img/C4.jpg", title: "title2" },
  { url: "../../Img/C5.jpg", title: "title2" },
  { url: "../../Img/C6.jpg", title: "title2" },
  { url: "../../Img/C7.jpg", title: "title2" },
];

function Catalog() {
  return (
    <div className="catalog">
      {images.map((image, index) => (
        <div className="catalog-item" key={index}>
          <img src={image.url} alt={image.title} className="catalog-image" />
          <div className="catalog-title">{image.title}</div>
        </div>
      ))}
    </div>
  );
}

export default Catalog;
