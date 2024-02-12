import React from "react";
import ReactDOM from "react-dom/client";
import About from "./components/About.jsx";
import Base from "./components/Base.jsx";
import Footer from "./components/Footer.jsx";
import FirstSection from "./components/First Section.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Base />
    <FirstSection />
    <About />
    <Footer />
    
  </React.StrictMode>
);
