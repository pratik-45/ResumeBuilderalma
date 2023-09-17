import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";


const Personalinfo = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [Personalinfo, setPersonalinfo] = useState({});
  const { handleSubmit, formState, register } = useForm();
  const navigate = useNavigate();
  
  const onSubmit = (data) => {
    // Dispatch the personal info to Redux store
    setPersonalinfo(data);

    // Redirect to the "Workexperience" component when the form is submitted
    navigate("/Workexperience");
  };

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setProfileImage(selectedImage);
  };

  const handleAvatarClick = () => {
    const fileInput = document.getElementById("profileImage");
    fileInput.click();
  };

  const handleBackClick = () => {
    navigate("/Templates");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-blue-100 p-6 shadow-md rounded-md max-w-xl w-4/5"
      >
        <h2 className="text-2xl mb-4 font-semibold text-gray-800">
          Personal Information
        </h2>
        {/* Avatar for profile picture */}
        <div className="mb-4 flex justify-between items-center">
          <div onClick={handleAvatarClick} className="cursor-pointer">
            <Avatar
              alt="Profile Image"
              src={profileImage ? URL.createObjectURL(profileImage) : ""}
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </div>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </div>

        {/* First Name and Last Name inputs */}
        <div className="mb-4">
          <div className="flex mb-2">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="firstName"
                className="block text-gray-700 font-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                {...register("firstName", { required: true })}
                className="form-input mt-1 block w-full rounded-md border-gray-300"
                placeholder="John"
                defaultValue={Personalinfo.firstName || ""}
              />
            </div>
            <div className="w-1/2 ml-2">
              <label
                htmlFor="lastName"
                className="block text-gray-700 font-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                {...register("lastName", { required: true })}
                className="form-input mt-1 block w-full rounded-md border-gray-300"
                placeholder="Doe"
                defaultValue={Personalinfo.lastName || ""}
              />
            </div>
          </div>
        </div>

        {/* Contact No. input */}
        <div className="mb-4">
          <label
            htmlFor="contactNo"
            className="block text-gray-700 font-semibold"
          >
            Contact No.
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            {...register("contactNo", {
              required: true,
              pattern: /^[0-9]{10}$/, // Match 10 digits
            })}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
            placeholder="1234567890"
            defaultValue={Personalinfo.contactNo || ""}
          />
          {formState.errors.contactNo && (
            <p className="text-red-500 text-sm mt-1">
              Valid Contact No. is required (10 digits)
            </p>
          )}
        </div>

        {/* Email input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            })}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
            placeholder="john.doe@example.com"
            defaultValue={Personalinfo.email || ""}
          />
          {formState.errors.email && (
            <p className="text-red-500 text-sm mt-1">Valid Email is required</p>
          )}
        </div>

        {/* Address and Pin Code inputs */}
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-gray-700 font-semibold"
          >
            Address
          </label>
          <textarea
            id="address"
            name="address"
            {...register("address", { required: true })}
            className="form-textarea mt-1 block w-full rounded-md border-gray-300"
            placeholder="123 Main St, City, Country"
            defaultValue={Personalinfo.address || ""}
          />
          {formState.errors.address && (
            <p className="text-red-500 text-sm mt-1">Address is required</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="pinCode"
            className="block text-gray-700 font-semibold"
          >
            Pin Code
          </label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            {...register("pinCode", { required: true })}
            className="form-input mt-1 block w-full rounded-md border-gray-300"
            placeholder="123456"
            defaultValue={Personalinfo.pinCode || ""}
          />
          {formState.errors.pinCode && (
            <p className="text-red-500 text-sm mt-1">Pin Code is required</p>
          )}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
            disabled={formState.isSubmitting}
          >
            Submit
          </button>
          <button
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none"
            onClick={handleBackClick}
          >
            Back
          </button>
          <button
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none"
            type="button"
            onClick={() => {
              // Redirect to the "Workexperience" component when the user clicks "Preview"
              navigate("/Workexperience");
            }}
          >
            Preview
          </button>
        </div>
      </form>
    </div>
  );
};

export default Personalinfo;
