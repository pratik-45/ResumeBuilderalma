import React from "react";

const Myresume = () => {
  return <div>Myresume</div>;
};

export default Myresume;
// import { useForm } from "react-hook-form";

// const ResumeForm = () => {
//   const { register, handleSubmit, formState } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // You can perform actions with the submitted data
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 shadow-md rounded-md max-w-md">
//         <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>

//         <div className="mb-4">
//           <label htmlFor="fullName" className="block font-medium text-gray-700">
//             Full Name (Only Letters and a dot)
//           </label>
//           <input
//             type="text"
//             id="fullName"
//             {...register("fullName", { required: true, pattern: /^[a-zA-Z]+\s?[.]?[a-zA-Z]+$/ })}
//             className={`form-input mt-1 block w-full ${formState.errors.fullName ? "border-red-500" : ""}`}
//           />
//           {formState.errors.fullName && (
//             <p className="mt-1 text-sm text-red-500">Valid full name is required</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block font-medium text-gray-700">
//             Email (Verified Domains Only)
//           </label>
//           <input
//             type="email"
//             id="email"
//             {...register("email", {
//               required: true,
//               pattern: /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.com)$/,
//             })}
//             className={`form-input mt-1 block w-full ${formState.errors.email ? "border-red-500" : ""}`}
//           />
//           {formState.errors.email && (
//             <p className="mt-1 text-sm text-red-500">Valid email domain is required</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="phone" className="block font-medium text-gray-700">
//             Phone (10 Digits, Numbers Only)
//           </label>
//           <input
//             type="tel"
//             id="phone"
//             {...register("phone", {
//               required: true,
//               pattern: /^[0-9]{10}$/,
//             })}
//             className={`form-input mt-1 block w-full ${formState.errors.phone ? "border-red-500" : ""}`}
//           />
//           {formState.errors.phone && (
//             <p className="mt-1 text-sm text-red-500">Valid 10-digit phone number is required</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="dob" className="block font-medium text-gray-700">
//             Date of Birth
//           </label>
//           <input
//             type="date"
//             id="dob"
//             {...register("dob", { required: true })}
//             className={`form-input mt-1 block w-full ${formState.errors.dob ? "border-red-500" : ""}`}
//           />
//           {formState.errors.dob && (
//             <p className="mt-1 text-sm text-red-500">Date of Birth is required</p>
//           )}
//         </div>

//         <div className="mb-4">
//           <label htmlFor="address" className="block font-medium text-gray-700">
//             Address
//           </label>
//           <textarea
//             id="address"
//             {...register("address", { required: true })}
//             className={`form-textarea mt-1 block w-full ${formState.errors.address ? "border-red-500" : ""}`}
//           />
//           {formState.errors.address && (
//             <p className="mt-1 text-sm text-red-500">Address is required</p>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
//           disabled={formState.isSubmitting}
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ResumeForm;
