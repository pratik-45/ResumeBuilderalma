import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Templates from "./components/Templates.jsx";
import Myresume from "./components/Myresume.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Personalinfo from "./components/Personalinfo.jsx";
import Workexperience from "./components/Workexperience";
import Education from "./components/Education";
import Keyskills from "./components/Keyskills";
import ResumePreview from "./components/ResumePreview";
import generatePDF from "./components/generatePDF"; // Import the generatePDF component

const App = () => {
  // Function to handle PDF generation
  const handleGeneratePDF = () => {
    // You can pass the necessary data to generatePDF here
    generatePDF(Personalinfo, Workexperience, Education, Keyskills);
  };
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/Templates" element={<Templates />} />
        <Route path="/Myresumes" element={<Myresume />} />
        <Route path="/Aboutus" element={<AboutUs />} />
        <Route path="/Personalinfo" element={<Personalinfo />} />
        <Route path="/Workexperience" element={<Workexperience />} />
        <Route path="/Education" element={<Education />} />
        <Route path="/Keyskills" element={<Keyskills />} />
        <Route path="/ResumePreview" element={<ResumePreview />} />
        {/* Add a route for generating PDF */}
        <Route path="/generatePDF" element={<generatePDF />} />
      </Routes>
      {/* Add a button to trigger PDF generation */}
      <button onClick={handleGeneratePDF}>Generate PDF</button>

    </div>
  );
};

export default App;
