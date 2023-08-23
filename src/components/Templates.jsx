import React from "react";
import Personalinfo from "./components/Personalinfo";

const ResumeTemplate = ({ showPersonalInfo }) => {
  return (
    <div className="min-h-screen flex flex-wrap gap-7 ml-10">
      {/* First Template */}
      <div className="bg-gradient-to-l from-55% from-black to-cyan-800 to-45% text-cyan-400 shadow-lg rounded-lg p-8 max-w-md mt-7 ">
        {/* Template Content */}
        <header>
          {/* This the Prersonel Info */}
          <h1 className="text-2xl font-semibold">Your Name</h1>
          <p className="text-gray-600">Contact Information</p>
        </header>

        <section className="my-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="text-gray-700">Your professional summary here.</p>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Job Title</h3>
                <p className="text-gray-600">Company Name - Date Range</p>
              </div>
            </div>
            <ul className="list-disc ml-6">
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              {/* Add more responsibilities */}
            </ul>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Degree</h3>
                <p className="text-gray-600">School Name - Graduation Year</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Second Template */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mt-7">
        {/* Template Content */}
        <header>
          {/* This the Prersonel Info */}
          <h1 className="text-2xl font-semibold">Your Name</h1>
          <p className="text-gray-600">Contact Information</p>
        </header>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="text-gray-700">Your professional summary here.</p>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Job Title</h3>
                <p className="text-gray-600">Company Name - Date Range</p>
              </div>
            </div>
            <ul className="list-disc ml-6">
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              {/* Add more responsibilities */}
            </ul>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Degree</h3>
                <p className="text-gray-600">School Name - Graduation Year</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Third Template */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mt-7">
        {/* Template Content */}
        <header>
          {/* This the Prersonel Info */}
          <h1 className="text-2xl font-semibold">Your Name</h1>
          <p className="text-gray-600">Contact Information</p>
        </header>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="text-gray-700">Your professional summary here.</p>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Job Title</h3>
                <p className="text-gray-600">Company Name - Date Range</p>
              </div>
            </div>
            <ul className="list-disc ml-6">
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              {/* Add more responsibilities */}
            </ul>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Degree</h3>
                <p className="text-gray-600">School Name - Graduation Year</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Fourth Template */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mt-7">
        {/* Template Content */}
        <header>
          {/* This the Prersonel Info */}
          <h1 className="text-2xl font-semibold">Your Name</h1>
          <p className="text-gray-600">Contact Information</p>
        </header>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Summary</h2>
          <p className="text-gray-700">Your professional summary here.</p>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Experience</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Job Title</h3>
                <p className="text-gray-600">Company Name - Date Range</p>
              </div>
            </div>
            <ul className="list-disc ml-6">
              <li>Responsibility 1</li>
              <li>Responsibility 2</li>
              {/* Add more responsibilities */}
            </ul>
          </div>
        </section>
        <section className="my-4">
          <h2 className="text-lg font-semibold">Education</h2>
          <div className="space-y-2">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-peace-dark rounded-full mr-2"></div>
              <div>
                <h3 className="text-md font-semibold">Degree</h3>
                <p className="text-gray-600">School Name - Graduation Year</p>
              </div>
            </div>
          </div>
        </section>
      </div>
         {/* Display PersonalInformation when showPersonalInfo is true */}
         {showPersonalInfo && <Personalinfo />}
    </div>
  );
};

export default ResumeTemplate;
