import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Templates from "./components/Templates.jsx";
import Myresume from "./components/Myresume.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Personalinfo from "./components/Personalinfo";

const App = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const navigate = useNavigate();

  const handleTemplateClick = () => {
    setShowPersonalInfo(true);
    navigate("/Personalinfo"); // Navigate to the personal info route
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Templates" element={<Templates />} />
        <Route path="/Myresumes" element={<Myresume />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route
          path="/Personalinfo"
          element={<Personalinfo setShowPersonalInfo={setShowPersonalInfo} />}
        />
        {/* Add more routes here if needed */}
      </Routes>
      {showPersonalInfo && <Personalinfo />}
    </div>
  );
};

export default App;
