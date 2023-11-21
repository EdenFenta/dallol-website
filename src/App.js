import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
      <Router>
        <NavBar />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/designprocess" element={<DesignProcess />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
