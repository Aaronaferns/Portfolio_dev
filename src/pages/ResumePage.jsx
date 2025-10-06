import React, { useState } from "react";

const ResumePage = () => {
  const [selectedResume, setSelectedResume] = useState(null); // start with no selection

  const resumeFiles = {
    software: {
      file: "/ResumeAaronFernandesSWE.pdf",
      label: "Software Engineering",
    },
    ml: {
      file: "/ResumeAaronFernandesMLE.pdf",
      label: "Machine Learning",
    },
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#212A31]">
      {/* Toggle + Download Buttons */}
      <div className="flex justify-center items-center gap-4 p-6 bg-gradient-to-r from-[#2E3944] to-[#212A31] shadow-lg">
        {/* Resume Toggle Buttons */}
        <button
          className={`px-6 py-2 rounded-xl font-semibold transition-transform duration-200 ${
            selectedResume === "software"
              ? "bg-gradient-to-r from-[#748D92] to-[#D3D9D4] text-[#212A31] shadow-lg"
              : "bg-[#2E3944] text-[#D3D9D4] hover:bg-[#748D92]"
          }`}
          onClick={() => setSelectedResume("software")}
        >
          Software Engineering
        </button>

        <button
          className={`px-6 py-2 rounded-xl font-semibold transition-transform duration-200 ${
            selectedResume === "ml"
              ? "bg-gradient-to-r from-[#748D92] to-[#D3D9D4] text-[#212A31] shadow-lg"
              : "bg-[#2E3944] text-[#D3D9D4] hover:bg-[#748D92]"
          }`}
          onClick={() => setSelectedResume("ml")}
        >
          Machine Learning
        </button>

        {/* Download Button */}
        {selectedResume && (
          <a
            href={resumeFiles[selectedResume].file}
            download
            className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#D3D9D4] to-[#748D92] text-[#212A31] font-semibold shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Download {resumeFiles[selectedResume].label} PDF
          </a>
        )}
      </div>

      {/* Resume Viewer */}
      <div className="flex-1 p-6">
        {selectedResume ? (
          <iframe
            src={resumeFiles[selectedResume].file}
            title="Resume Viewer"
            className="w-full h-full border-none rounded-xl shadow-2xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[#D3D9D4] text-xl">
            Select a resume to view
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePage;
