import React from "react";

const ResumePage = () => {
  const resumeFile = "/ResumeAaronFernandesMLE.pdf";
  const resumeLabel = "Machine Learning";

  return (
    <div className="fixed inset-0" style={{ backgroundColor: '#D3D9D4' }}>
      {/* Header */}
      <div className="absolute top-6 left-6 z-20">
        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 text-sm font-semibold rounded-lg bg-[#212A31] text-[#D3D9D4] hover:bg-[#2E3944] transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
        >
          ← Back
        </button>
      </div>

      {/* Resume Viewer */}
      <div className="pt-20 h-full">
        <iframe
          src={resumeFile}
          title="Resume Viewer"
          className="w-full h-full border-none"
        />
      </div>
    </div>
  );
};

export default ResumePage;
