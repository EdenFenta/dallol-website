import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Catalog from "./Components/Catalog/Catalog";
import DesignProcess from "./Components/DesignProcess/DesignProcess";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Home />
      <About />
      <Catalog />
      <DesignProcess />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
