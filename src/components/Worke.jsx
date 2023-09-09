import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Worke = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/education");
  };

  const handleBackClick = () => {
    navigate("/Personalinfo");
  };

  // Generate an array of years for the dropdown (e.g., from 1990 to the current year)
  const startYearOptions = [];
  const endYearOptions = [];
  const currentYear = new Date().getFullYear();
  for (let year = 1990; year <= currentYear; year++) {
    startYearOptions.push(year);
    endYearOptions.push(year);
  }

  return (
    <div className="max-w-md mx-auto p-6 border rounded-md border-gray-300 mt-10">
      <h1 className="text-2xl font-semibold">Work Experience</h1>
      <h2 className="text-lg text-gray-600 underline pb-2">Experience1</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="p-4 rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="jobTitle"
            className="block text-gray-700 font-semibold"
          >
            Job Title
          </label>
          <Controller
            name="jobTitle"
            control={control}
            defaultValue=""
            rules={{ required: "Job Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="jobTitle"
                className="form-input w-full rounded-md border border-gray-300"
                placeholder="Enter Job Title"
              />
            )}
          />
          {errors.jobTitle && (
            <p className="text-red-500 text-sm mt-1">
              {errors.jobTitle.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="organization"
            className="block text-gray-700 font-semibold"
          >
            Organization Name
          </label>
          <Controller
            name="organization"
            control={control}
            defaultValue=""
            rules={{ required: "Organization Name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="organization"
                className="form-input w-full rounded-md border border-gray-300"
                placeholder="Enter Organization Name"
              />
            )}
          />
          {errors.organization && (
            <p className="text-red-500 text-sm mt-1">
              {errors.organization.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
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
                <select
                  {...field}
                  onChange={(e) => setValue("startYear", e.target.value)}
                  className="form-select w-full rounded-md border border-gray-300"
                >
                  <option value="">Select Year</option>
                  {startYearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
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
                <select
                  {...field}
                  onChange={(e) => setValue("endYear", e.target.value)}
                  className="form-select w-full rounded-md border border-gray-300"
                >
                  <option value="">Select Year</option>
                  {endYearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              )}
            />
            {errors.endYear && (
              <p className="text-red-500 text-sm mt-1">
                {errors.endYear.message}
              </p>
            )}
          </div>
        </div>

        <div className="text-right mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-2 rounded-md hover:bg-blue-600 focus:outline-none mr-2 border border-blue-500"
          >
            Submit
          </button>
          <button
            className="bg-gray-300 text-gray-700 py-2 px-2 rounded-md hover:bg-gray-400 focus:outline-none border border-gray-300"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default Worke;
