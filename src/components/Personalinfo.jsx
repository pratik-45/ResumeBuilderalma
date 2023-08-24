import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Personalinfo = ({ setShowPersonalInfo }) => {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data); // You can perform actions with the submitted data
  };

  const handleBackClick = () => {
    setShowPersonalInfo(false);
    navigate("/Templates"); // Navigate back to the templates selection
  };

  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-6 shadow-md rounded-md max-w-md"
      >
        {/* ... Your form fields ... */}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          disabled={formState.isSubmitting}
        >
          Submit
        </button>
      </form>
      <button
        className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 ml-4"
        onClick={handleBackClick}
      >
        Back
      </button>
    </div>
  );
};

export default Personalinfo;
