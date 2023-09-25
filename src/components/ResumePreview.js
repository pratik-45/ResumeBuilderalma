import React, { useEffect, useState } from "react";
import generatePDF from "./generatePDF"; // Import the PDF generation function

const ResumePreview = () => {
  const [personalInfoData, setPersonalInfoData] = useState({});
  const [workExperienceData, setWorkExperienceData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    // Retrieve the Personalinfo data from localStorage
    const storedPersonalInfo = localStorage.getItem("personalInfoData");
    if (storedPersonalInfo) {
      setPersonalInfoData(JSON.parse(storedPersonalInfo));
    }

    // Retrieve the Workexperience data from localStorage
    const storedWorkExperience = localStorage.getItem("WorkexperienceData");
    if (storedWorkExperience) {
      setWorkExperienceData(JSON.parse(storedWorkExperience));
    }

    // Retrieve the Education data from localStorage
    const storedEducation = localStorage.getItem("EducationData");
    if (storedEducation) {
      setEducationData(JSON.parse(storedEducation));
    }

    // Retrieve the skills data from localStorage
    const storedSkills = localStorage.getItem("skillsData");
    if (storedSkills) {
      setSkillsData(JSON.parse(storedSkills));
    }
  }, []);

  // Function to handle the download button click
  const handleDownloadPDF = () => {
    // Check if Personalinfo and other data is available
    if (
      Object.keys(personalInfoData).length > 0 &&
      Object.keys(workExperienceData).length > 0 &&
      Object.keys(educationData).length > 0 &&
      skillsData.length > 0
    ) {
      // Generate the PDF using the data
      generatePDF(
        personalInfoData,
        workExperienceData,
        educationData,
        skillsData
      );
    } else {
      // Handle the case where data is missing
      alert("Some information is missing. Cannot generate PDF.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md border-gray-300 mt-10">
      <h1 className="text-2xl font-semibold">Resume Preview</h1>

      {/* Display personal information */}
      <h2 className="text-lg text-gray-600 underline pb-2">
        Personal Information
      </h2>
      {Object.keys(personalInfoData).length > 0 ? (
        <div>
          <p>
            Name: {personalInfoData.firstName} {personalInfoData.lastName}
          </p>
          <p>Contact No: {personalInfoData.contactNo}</p>
          <p>Email: {personalInfoData.email}</p>
          <p>
            Address: {personalInfoData.address}, Pin Code:{" "}
            {personalInfoData.pinCode}
          </p>
        </div>
      ) : (
        <p>No personal information available.</p>
      )}

      {/* Display work experience */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">
        Work Experience
      </h2>
      {Object.keys(workExperienceData).length > 0 ? (
        <ul>
          <li>
            <p>Job Title: {workExperienceData.jobTitle}</p>
            <p>Organization: {workExperienceData.organization}</p>
            <p>Start Year: {workExperienceData.startYear}</p>
            <p>End Year: {workExperienceData.endYear}</p>
          </li>
        </ul>
      ) : (
        <p>No work experience available.</p>
      )}

      {/* Display Education */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">Education</h2>
      {Object.keys(educationData).length > 0 ? (
        <ul>
          <li>
            <p>Type: {educationData.type}</p>
            <p>University: {educationData.university}</p>
            <p>Degree: {educationData.degree}</p>
            <p>Start Year: {educationData.startYear}</p>
            <p>End Year: {educationData.endYear}</p>
          </li>
        </ul>
      ) : (
        <p>No Education information available.</p>
      )}

      {/* Display key skills */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">Key Skills</h2>
      {skillsData.length > 0 ? (
        <ul>
          {skillsData.map((skill, index) => (
            <li key={index}>
              <p>
                Skill {index + 1}: {skill}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No key skills available.</p>
      )}

      {/* Download button */}
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
          onClick={handleDownloadPDF}
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;
