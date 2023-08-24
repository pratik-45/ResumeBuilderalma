import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
=======
import { Routes, Route, useNavigate } from "react-router-dom";
>>>>>>> 33528a1ced193fff4b0b9cee26ff5b0cef7b41a2
import Templates from "./components/Templates.jsx";
import Myresume from "./components/Myresume.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Personalinfo from "./components/Personalinfo.jsx";

const App = () => {
<<<<<<< HEAD
  const [showPersonalInfo] = useState(false); // Removed setShowPersonalInfo
=======
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);
  const navigate = useNavigate();

  const handleTemplateClick = () => {
    setShowPersonalInfo(true);
    navigate("/Personalinfo"); // Navigate to the personal info route
  };
>>>>>>> 33528a1ced193fff4b0b9cee26ff5b0cef7b41a2

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
<<<<<<< HEAD
      <div className="App">
        {/* Use the ResumeTemplate component */}
        {/* <Templates showPersonalInfo={showPersonalInfo} /> */}
      </div>
      {/* Use the Personalinfo component */}
=======
>>>>>>> 33528a1ced193fff4b0b9cee26ff5b0cef7b41a2
      {showPersonalInfo && <Personalinfo />}
    </div>
  );
};

export default App;
