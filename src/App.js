import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // Removed Switch import
import Templates from "./components/Templates.jsx";
import Myresume from "./components/Myresume.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Personalinfo from "./components/Personalinfo";

const App = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  const handleTemplateClick = () => {
    setShowPersonalInfo(true);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Templates" element={<Templates />} />
        <Route path="/Myresumes" element={<Myresume />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        {/* Add more routes here if needed */}
      </Routes>
      <div>
        <div className="App">
           {/* Use the ResumeTemplate component */}
           <Templates showPersonalInfo={showPersonalInfo} />
        </div>
      </div>
    </div>
  );
};

export default App;
