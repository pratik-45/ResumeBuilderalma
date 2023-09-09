import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResumeTemplate = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate();

  const handleTemplateClick = (templateIndex) => {
    setSelectedTemplate(templateIndex);
    navigate("/Personalinfo");
  };

  const isTemplateSelected = (templateIndex) => {
    return selectedTemplate === templateIndex;
  };

  const backgroundColors = [
    "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    // Add more background colors as needed
  ];

  const templates = [
    { id: 1, name: "Template 1" /* Other template data */ },
    { id: 2, name: "Template 2" /* Other template data */ },
    { id: 3, name: "Template 3" /* Other template data */ },
    { id: 4, name: "Template 4" /* Other template data */ },
    // ... Define more templates
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {templates.map((template, index) => (
        <div
          key={template.id}
          className={`p-4 border rounded-lg m-4 w-72 cursor-pointer transition-transform duration-300 ease-in-out ${
            isTemplateSelected(index) ? "border-blue-500" : ""
          } ${backgroundColors[index]}`}
          onClick={() => handleTemplateClick(index)}
        >
          <h2 className="text-xl mb-2">{template.name}</h2>
          <div
            className={`bg-white p-4 rounded-lg hover:bg-gray-200 hover:shadow-lg hover:text-blue-500`}
          >
            <h3 className="text-lg font-semibold">John Doe</h3>
            <p className="text-sm text-gray-500">Web Developer</p>
            <hr className="my-2" />
            {/* ... Resume content */}
          </div>
          <p className="mt-4">Description of the template.</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeTemplate;
