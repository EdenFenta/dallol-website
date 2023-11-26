import React from "react";
import "./Card.css";

const Card = ({ heading, detail }) => {
  return (
    <div className="card">
      <div className="card-content">
        <span className="card-heading">{heading}</span>
        <br />
        <span>{detail}</span>
      </div>
    </div>
  );
};

export default Card;
