// PDFGenerator.js
import jsPDF from "jspdf";

const generatePDF = (personalInfo, workExperience, education, skills) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add content to the PDF using doc.text, doc.image, etc.
  doc.setFontSize(16);
  doc.text(20, 20, "Resume");

  // Personal Information
  doc.setFontSize(14);
  doc.text(20, 30, "Personal Information:");
  doc.setFontSize(12);
  doc.text(
    20,
    40,
    `Name: ${
      personalInfo ? personalInfo.firstName + " " + personalInfo.lastName : ""
    }`
  );
  doc.text(20, 50, `Contact No: ${personalInfo ? personalInfo.contactNo : ""}`);
  doc.text(20, 60, `Email: ${personalInfo ? personalInfo.email : ""}`);
  doc.text(
    20,
    70,
    `Address: ${
      personalInfo
        ? personalInfo.address + ", Pin Code: " + personalInfo.pinCode
        : ""
    }`
  );

  // Work Experience
  doc.setFontSize(14);
  doc.text(20, 80, "Work Experience:");
  doc.setFontSize(12);
  let yOffset = 90;
  workExperience.forEach((exp, index) => {
    yOffset += 10;
    doc.text(20, yOffset, `Experience ${index + 1}:`);
    yOffset += 10;
    doc.text(20, yOffset, `Job Title: ${exp.jobTitle}`);
    yOffset += 10;
    doc.text(20, yOffset, `Organization: ${exp.organization}`);
    yOffset += 10;
    doc.text(20, yOffset, `Start Year: ${exp.startYear}`);
    yOffset += 10;
    doc.text(20, yOffset, `End Year: ${exp.endYear}`);
  });

  // Education
  doc.setFontSize(14);
  doc.text(20, yOffset + 10, "Education:");
  doc.setFontSize(12);
  yOffset += 20;
  education.forEach((edu, index) => {
    yOffset += 10;
    doc.text(20, yOffset, `Education ${index + 1}:`);
    yOffset += 10;
    doc.text(20, yOffset, `Type: ${edu.type}`);
    yOffset += 10;
    doc.text(20, yOffset, `University: ${edu.university}`);
    yOffset += 10;
    doc.text(20, yOffset, `Degree: ${edu.degree}`);
    yOffset += 10;
    doc.text(20, yOffset, `Start Year: ${edu.startYear}`);
    yOffset += 10;
    doc.text(20, yOffset, `End Year: ${edu.endYear}`);
  });

  // Key Skills
  doc.setFontSize(14);
  doc.text(20, yOffset + 10, "Key Skills:");
  doc.setFontSize(12);
  skills.forEach((skill, index) => {
    yOffset += 10;
    doc.text(20, yOffset, `Skill ${index + 1}: ${skill}`);
  });

  // Save the PDF or display it for download
  doc.save("resume.pdf");
};

export default generatePDF;
