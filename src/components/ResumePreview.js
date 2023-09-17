import React from "react";
import generatePDF from "./generatePDF"; // Import the PDF generation function

const ResumePreview = ({ Personalinfo, Workexperience, Education, Keyskills }) => {
  // Function to handle the download button click
  const handleDownloadPDF = () => {
    // Check if Personalinfo is available
    if (Personalinfo) {
      // Generate the PDF using the data
      generatePDF(Personalinfo, Workexperience, Education, Keyskills);
    } else {
      // Handle the case where Personalinfo is missing or undefined
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
      {Personalinfo ? (
        <div>
          <p>
            Name: {Personalinfo.firstName} {Personalinfo.lastName}
          </p>
          <p>Contact No: {Personalinfo.contactNo}</p>
          <p>Email: {Personalinfo.email}</p>
          <p>
            Address: {Personalinfo.address}, Pin Code: {Personalinfo.pinCode}
          </p>
        </div>
      ) : (
        <p>No personal information available.</p>
      )}

      {/* Display work experience */}
      <div className="text-lg text-gray-600 underline pb-2 mt-4">
        Work Experience
        {Workexperience && Workexperience.length > 0 ? (
          <ul>
            {Workexperience.map((workExp, index) => (
              <li key={index}>
                <p>Experience {index + 1}:</p>
                <p>Job Title: {workExp.jobTitle}</p>
                <p>Organization: {workExp.organization}</p>
                <p>Start Year: {workExp.startYear}</p>
                <p>End Year: {workExp.endYear}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No work experience available.</p>
        )}
      </div>

      {/* Display Education */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">Education</h2>
      {Education && Education.length > 0 ? (
        <ul>
          {Education.map((education, index) => (
            <li key={index}>
              <p>Education {index + 1}:</p>
              <p>Type: {education.type}</p>
              <p>University: {education.university}</p>
              <p>Degree: {education.degree}</p>
              <p>Start Year: {education.startYear}</p>
              <p>End Year: {education.endYear}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Education information available.</p>
      )}

      {/* Display key skills */}
      <h2 className="text-lg text-gray-600 underline pb-2 mt-4">Key Skills</h2>
      {Keyskills && Keyskills.length > 0 ? (
        <ul>
          {Keyskills.map((skill, index) => (
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
