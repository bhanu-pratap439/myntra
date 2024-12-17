import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <HeroSection />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
