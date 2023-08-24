import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeTemplate = (props) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleTemplateClick = (templateIndex) => {
    setSelectedTemplate(templateIndex);
    props.setShowPersonalInfo(true); // Show the personal info section
    navigate("/Personalinfo"); // Navigate to the personal info route
  };

  const isTemplateSelected = (templateIndex) => {
    return selectedTemplate === templateIndex;
  };

  // ... Your template components here ...
};

export default ResumeTemplate;
