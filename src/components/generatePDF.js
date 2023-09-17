import jsPDF from "jspdf";

const generatePDF = (
  Personalinfo,
  WorkexperienceData,
  Education,
  Keyskills
) => {
  // Create a new jsPDF instance
  const doc = new jsPDF();

  // Add content to the PDF using doc.text, doc.image, etc.
  doc.setFontSize(16);
  doc.text(20, 20, "Resume");

  // Personal Information
  doc.setFontSize(14);
  doc.text(20, 30, "Personal Information:");
  doc.setFontSize(12);
  if (Personalinfo) {
    doc.text(
      20,
      40,
      `Name: ${Personalinfo.firstName} ${Personalinfo.lastName}`
    );
    doc.text(20, 50, `Contact No: ${Personalinfo.contactNo}`);
    doc.text(20, 60, `Email: ${Personalinfo.email}`);
    doc.text(
      20,
      70,
      `Address: ${Personalinfo.address}, Pin Code: ${Personalinfo.pinCode}`
    );
  } else {
    // Handle the case where Personalinfo is missing
    doc.text(20, 40, "Personal information is missing.");
  }

  // Work Experience
  doc.setFontSize(14);
  doc.text(20, 80, "Work Experience:");
  doc.setFontSize(12);
  if (Array.isArray(WorkexperienceData) && WorkexperienceData.length > 0) {
    let yOffset = 90;
    WorkexperienceData.forEach((experience, index) => {
      yOffset += 10;
      doc.text(20, yOffset, `Experience ${index + 1}:`);
      yOffset += 10;
      doc.text(20, yOffset, `Job Title: ${experience.jobTitle}`);
      yOffset += 10;
      doc.text(20, yOffset, `Organization: ${experience.organization}`);
      yOffset += 10;
      doc.text(20, yOffset, `Start Year: ${experience.startYear}`);
      yOffset += 10;
      doc.text(20, yOffset, `End Year: ${experience.endYear}`);
    });
  } else {
    // Handle the case where WorkexperienceData is missing or empty
    doc.text(20, 80, "No work experience available.");
  }

  // Education
  doc.setFontSize(14);
  doc.text(20, 180, "Education:");
  doc.setFontSize(12);
  if (Array.isArray(Education) && Education.length > 0) {
    let yOffset = 190;
    Education.forEach((education, index) => {
      yOffset += 10;
      doc.text(20, yOffset, `Education ${index + 1}:`);
      yOffset += 10;
      doc.text(20, yOffset, `Type: ${education.type}`);
      yOffset += 10;
      doc.text(20, yOffset, `University: ${education.university}`);
      yOffset += 10;
      doc.text(20, yOffset, `Degree: ${education.degree}`);
      yOffset += 10;
      doc.text(20, yOffset, `Start Year: ${education.startYear}`);
      yOffset += 10;
      doc.text(20, yOffset, `End Year: ${education.endYear}`);
    });
  } else {
    // Handle the case where Education is missing or empty
    doc.text(20, 180, "No education information available.");
  }

  // Key Skills
  doc.setFontSize(14);
  doc.text(20, 280, "Key Skills:");
  doc.setFontSize(12);
  if (Array.isArray(Keyskills) && Keyskills.length > 0) {
    let yOffset = 290;
    Keyskills.forEach((skill, index) => {
      yOffset += 10;
      doc.text(20, yOffset, `Skill ${index + 1}: ${skill}`);
    });
  } else {
    // Handle the case where Keyskills is missing or empty
    doc.text(20, 280, "No key skills available.");
  }

  // Save the PDF or display it for download
  doc.save("resume.pdf");
};

export default generatePDF;
