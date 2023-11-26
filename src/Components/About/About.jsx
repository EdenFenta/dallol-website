import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="/about" className="about">
      <h1>About Dallol</h1>
      <div className="content">
        <div className="section">
          <h2>Inspiration</h2>
          <p>
            <span className="highlight">Dallol</span>, a furniture company based
            in Ethiopia, is inspired by the
            <span className="highlight">
              {" "}
              stunningly beautiful yet harsh Dallol Depression
            </span>{" "}
            in Northern Ethiopia. This location, known for its{" "}
            <span className="highlight">unique colors and textures</span>,
            serves as the muse for our designs. Our mission is to create a{" "}
            <span className="highlight">brand identity</span> that is both
            unique and memorable. We aim to reflect our company's values and
            mission while also highlighting the connection to the location's
            colors and textures.
          </p>
          <p>
            To create a successful{" "}
            <span className="highlight">branding strategy</span>, we consider
            several elements. We strive to understand our{" "}
            <span className="highlight">target audience</span> and what they
            value. This helps us create a brand identity that resonates with
            them. We identify and communicate our{" "}
            <span className="highlight">unique selling proposition</span>{" "}
            effectively. Finally, we ensure that our brand is{" "}
            <span className="highlight">consistent</span> across all channels,
            including social media, website, advertising, and packaging.
          </p>
        </div>
        <div className="separator"></div>
        <div className="section">
          <h2>Identity</h2>
          <p>
            Our <span className="highlight">brand identity</span> evokes a sense
            of authenticity and simplicity while highlighting the connection to
            the earthy colors of the Dallol Depression. Our logo is simple yet
            memorable, with a color palette that reflects the location's
            distinct hues. Our tagline, "Elevate your space with our
            earth-inspired designs," communicates our brand's mission and values
            while also highlighting its connection to the location.
          </p>
          <p>
            By incorporating these elements into our{" "}
            <span className="highlight">branding strategy</span>, Dallol
            differentiates itself from competitors and attracts customers who
            value
            <span className="highlight">
              {" "}
              authenticity, durability, and unique design
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
