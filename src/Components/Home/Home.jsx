import React from "react";
import "./Home.css";
import Card from "../Card/Card.jsx";
import { motion } from "framer-motion";

const Home = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="home">
      <div className="texts">
        <span className="title">Elevate Your Space</span>
        <div className="subtitle">- with Dallol</div>
        <span className="description">
          Decorate your home with durable furniture that draws inspiration from
          the beautiful yet harsh Dallol Depression. Our pieces are designed to
          withstand the test of time, just like the enduring landscapes of
          Dallol. Each item is crafted with care, ensuring that it not only
          looks good, but also serves its purpose in your home.
        </span>
      </div>
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            heading={"Inspired by Nature"}
            detail={"Unique design\n\nEarthly textures and colors"}
          />
        </motion.div>
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            heading={"Guaranteed Satisfaction"}
            detail={"Authentic furniture that meets your needs"}
          />
        </motion.div>
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            heading={"Built to Last"}
            detail={
              "Crafted with high-quality materials for longevity\n\nTimeless designs that never go out of style"
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
