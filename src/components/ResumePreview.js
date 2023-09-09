import React from "react";
import generatePDF from "./generatePDF"; // Import the PDF generation function

const ResumePreview = ({ personalInfo, workExperience, education, skills }) => {
  // Function to handle the download button click
  const handleDownloadPDF = () => {
    // Check if personalInfo is available
    if (personalInfo) {
      // Generate the PDF using the data
      generatePDF(personalInfo, workExperience, education, skills);
    } else {
      // Handle the case where personalInfo is missing or undefined
      alert("Personal information is missing. Cannot generate PDF.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md border-gray-300 mt-10">
      <h1 className="text-2xl font-semibold">Resume Preview</h1>

      {/* Display personal information */}
      <h2 className="text-lg text-gray-600 underline pb-2">
        Personal Information
      </h2>
      {personalInfo ? (
        <div>
          <p>
            Name: {personalInfo.firstName} {personalInfo.lastName}
          </p>
          <p>Contact No: {personalInfo.contactNo}</p>
          <p>Email: {personalInfo.email}</p>
          <p>
            Address: {personalInfo.address}, Pin Code: {personalInfo.pinCode}
          </p>
        </div>
      ) : (
        <p>No personal information available.</p>
      )}

      {/* Display work experience */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">
        Work Experience
      </h2>
      {workExperience.length > 0 ? (
        <ul>
          {workExperience.map((exp, index) => (
            <li key={index}>
              <p>Experience {index + 1}:</p>
              <p>Job Title: {exp.jobTitle}</p>
              <p>Organization: {exp.organization}</p>
              <p>Start Year: {exp.startYear}</p>
              <p>End Year: {exp.endYear}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No work experience available.</p>
      )}

      {/* Display education */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">Education</h2>
      {education.length > 0 ? (
        <ul>
          {education.map((edu, index) => (
            <li key={index}>
              <p>Education {index + 1}:</p>
              <p>Type: {edu.type}</p>
              <p>University: {edu.university}</p>
              <p>Degree: {edu.degree}</p>
              <p>Start Year: {edu.startYear}</p>
              <p>End Year: {edu.endYear}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No education information available.</p>
      )}

      {/* Display key skills */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">Key Skills</h2>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
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
