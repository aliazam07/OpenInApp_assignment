import React, { useState } from "react";
import { FaBell, FaUpload } from "react-icons/fa";
import { SiMicrosoftexcel } from "react-icons/si";
import { GrRefresh } from "react-icons/gr";
import userImage from "../assets/user.png";

const Upload = ({ darkMode }) => {
  const [uploaded, setUploaded] = useState(false);

  const handleUploadClick = () => {
    setUploaded(!uploaded);
  };

  return (
    <div className={`p-4 flex flex-col items-center justify-center h-screen ${darkMode ? "bg-black text-white" : "bg-white text-black"}`}>
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full max-w-[1065px] h-[32.93px] mb-6">
        <h1 className="text-xl font-bold">Upload CSV</h1>
        <div className="flex items-center gap-4">
          <FaBell className="text-xl text-gray-600" />
          <div className="flex items-center">
            <img src={userImage} alt="User" className="w-8 h-8 rounded-full object-cover mr-2" />
          </div>
        </div>
      </div>

      {/* Upload Area */}
      <div className={`relative w-full max-w-[596px] h-[367px] ${darkMode ? "bg-gray-700" : "bg-gray-100"} border-dashed border-2 border-gray-300 rounded-tl-[8px] flex items-center justify-center`}>
        <div className={`absolute w-full max-w-[564px] h-[258px] top-[16px] left-[16px] ${darkMode ? "bg-gray-600" : "bg-white"} rounded-tl-[8px] border-t border-l border-gray-300 flex items-center justify-center ${uploaded ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col items-center w-[267px] h-[76px]">
            <SiMicrosoftexcel className="text-green-600 text-4xl mb-2" />
            <p className="text-gray-500 text-center">
              {uploaded ? "upload-template.xlsx" : "Drop your Excel sheet here or browse"}
            </p>
          </div>
        </div>

        <button
          onClick={handleUploadClick}
          className="absolute w-full max-w-[564px] h-[56px] top-[295px] left-[16px] bg-[#605BFF] text-white rounded-tl-[8px] flex items-center justify-center gap-2 px-4 py-2"
        >
          {uploaded ? (
            <GrRefresh className="text-xl" />
          ) : (
            <FaUpload className="text-xl" />
          )}
          {!uploaded && <span className="text-lg font-semibold">Upload</span>}
        </button>
      </div>
    </div>
  );
};

export default Upload;
