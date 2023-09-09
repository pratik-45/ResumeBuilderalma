import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const KeySkills = () => {
  const [skills, setSkills] = useState(["", "", "", ""]); // State to store skill values
  const navigate = useNavigate();

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handlePreview = () => {
    // Redirect to the ResumePreview component with skills data
    navigate("/ResumePreview", { state: { skills } });
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md border-gray-300 mt-10">
      <h1 className="text-2xl font-semibold">Key Skills</h1>

      <div className="flex flex-wrap -mx-2">
        {skills.map((skill, index) => (
          <div key={index} className="w-1/2 px-2 mt-4">
            <input
              type="text"
              className="form-input mt-1 block w-full rounded-md border border-gray-300"
              placeholder="Enter Skill"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
            />
            {skills.length > 1 && (
              <button
                className="text-red-500 text-sm mt-1 focus:outline-none"
                onClick={() => handleRemoveSkill(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
      </div>

      <p className="text-blue-500 mt-2 cursor-pointer" onClick={handleAddSkill}>
        Add New
      </p>

      <div className="mt-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none mr-2"
          onClick={handlePreview}
        >
          Preview
        </button>
        <Link
          to="/Education"
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none ml-2"
        >
          Back
        </Link>
      </div>
    </div>
  );
};

export default KeySkills;
