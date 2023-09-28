import jsPDF from "jspdf";

const generatePDF = (
  personalInfoData,
  workExperienceData,
  educationData,
  skillsData,
  profileImage
) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text(20, 20, "Resume");

  // Profile Image
  if (profileImage) {
    const imgData = profileImage;
    doc.addImage(imgData, "JPEG", 20, 30, 40, 40);
  }

  // Personal Information
  doc.setFontSize(14);
  doc.text(20, 30, "Personal Information:");
  doc.setFontSize(12);
  if (personalInfoData) {
    doc.text(
      20,
      40,
      `Name: ${personalInfoData.firstName} ${personalInfoData.lastName}`
    );
    doc.text(20, 50, `Contact No: ${personalInfoData.contactNo}`);
    doc.text(20, 60, `Email: ${personalInfoData.email}`);
    doc.text(
      20,
      70,
      `Address: ${personalInfoData.address}, Pin Code: ${personalInfoData.pinCode}`
    );
  } else {
    doc.text(20, 40, "Personal information is missing.");
  }

  // Work Experience
  if (workExperienceData) {
    doc.setFontSize(14);
    doc.text(20, 80, "Work Experience:");
    doc.setFontSize(12);
    let yOffset = 90;
    doc.text(20, yOffset, `Job Title: ${workExperienceData.jobTitle}`);
    yOffset += 10;
    doc.text(20, yOffset, `Organization: ${workExperienceData.organization}`);
    yOffset += 10;
    doc.text(20, yOffset, `Start Year: ${workExperienceData.startYear}`);
    yOffset += 10;
    doc.text(20, yOffset, `End Year: ${workExperienceData.endYear}`);
  } else {
    doc.setFontSize(14);
    doc.text(20, 80, "No work experience available.");
  }

  // Education
  if (educationData) {
    doc.setFontSize(14);
    doc.text(20, 180, "Education:");
    doc.setFontSize(12);
    let yOffset = 190;
    doc.text(20, yOffset, `Type: ${educationData.type}`);
    yOffset += 10;
    doc.text(20, yOffset, `University: ${educationData.university}`);
    yOffset += 10;
    doc.text(20, yOffset, `Degree: ${educationData.degree}`);
    yOffset += 10;
    doc.text(20, yOffset, `Start Year: ${educationData.startYear}`);
    yOffset += 10;
    doc.text(20, yOffset, `End Year: ${educationData.endYear}`);
  } else {
    doc.setFontSize(14);
    doc.text(20, 180, "No education information available.");
  }

  // Key Skills
  doc.setFontSize(14);
  doc.text(20, 280, "Key Skills:");
  doc.setFontSize(12);
  if (skillsData.length > 0) {
    let yOffset = 290;
    skillsData.forEach((skill, index) => {
      doc.text(20, yOffset, `Skill ${index + 1}: ${skill}`);
      yOffset += 20; // Increase the yOffset to add more spacing
    });
  } else {
    doc.text(20, 280, "No key skills available.");
  }

  doc.save("resume.pdf");
};

export default generatePDF;
