// import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Education = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Store the Education data in localStorage
    localStorage.setItem("EducationData", JSON.stringify(data));
    navigate("/keyskills");
  };

  // Function to add a new education detail template
  const addNewEducation = () => {
    // You can add your logic here to add a new education detail template
    console.log("Add New Education");
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md border-gray-300 mt-10">
      <h1 className="text-2xl font-semibold">Education</h1>
      <h2 className="text-lg text-gray-600 underline pb-2">Education1</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
        <div className="mb-4">
          <label htmlFor="type" className="block text-gray-700 font-semibold">
            Type
          </label>
          <Controller
            name="type"
            control={control}
            defaultValue=""
            rules={{ required: "Type is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="type"
                className="form-input mt-1 block w-full rounded-md border-gray-300"
              />
            )}
          />
          {errors.type && (
            <p className="text-red-500 text-sm mt-1">{errors.type.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="university"
            className="block text-gray-700 font-semibold"
          >
            University
          </label>
          <Controller
            name="university"
            control={control}
            defaultValue=""
            rules={{ required: "University is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="university"
                className="form-input mt-1 block w-full rounded-md border-gray-300"
              />
            )}
          />
          {errors.university && (
            <p className="text-red-500 text-sm mt-1">
              {errors.university.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="degree" className="block text-gray-700 font-semibold">
            Degree
          </label>
          <Controller
            name="degree"
            control={control}
            defaultValue=""
            rules={{ required: "Degree is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="degree"
                className="form-input mt-1 block w-full rounded-md border-gray-300"
              />
            )}
          />
          {errors.degree && (
            <p className="text-red-500 text-sm mt-1">{errors.degree.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="startYear"
            className="block text-gray-700 font-semibold"
          >
            Start Year
          </label>
          <Controller
            name="startYear"
            control={control}
            defaultValue=""
            rules={{ required: "Start Year is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="startYear"
                className="form-input mt-1 block w-full rounded-md border-gray-300"
              />
            )}
          />
          {errors.startYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.startYear.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="endYear"
            className="block text-gray-700 font-semibold"
          >
            End Year
          </label>
          <Controller
            name="endYear"
            control={control}
            defaultValue=""
            rules={{ required: "End Year is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="endYear"
                className="form-input mt-1 block w-full rounded-md border-gray-300"
              />
            )}
          />
          {errors.endYear && (
            <p className="text-red-500 text-sm mt-1">
              {errors.endYear.message}
            </p>
          )}
        </div>

        <div className="text-right mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none ml-2"
          >
            Next
          </button>
        </div>
      </form>

      <div className="text-center mt-6">
        <p className="text-blue-500 cursor-pointer" onClick={addNewEducation}>
          Add New
        </p>
      </div>
    </div>
  );
};

export default Education;
