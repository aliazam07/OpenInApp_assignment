import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Upload from '../components/Upload';
import { FaBell, FaBars } from 'react-icons/fa';
import logo from "../assets/logo.png";

const HomePage = () => {
  const [selectedMenu, setSelectedMenu] = useState("Upload");
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebarVisibility = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <div className={`flex ${darkMode ? "bg-black text-white" : "bg-white text-black"} h-screen`}>
      <Sidebar 
        setSelectedMenu={setSelectedMenu} 
        toggleDarkMode={toggleDarkMode} 
        darkMode={darkMode}
        isSidebarVisible={isSidebarVisible}
        toggleSidebarVisibility={toggleSidebarVisibility}
      />
      <div className="flex-1 flex flex-col">
        <div className={`md:hidden flex items-center justify-between p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} fixed top-0 left-0 w-full z-50`}>
          <button onClick={toggleSidebarVisibility} className="text-xl">
            <FaBars />
          </button>
          <img src={logo} className="w-10 h-10" alt="Logo" />
          <h1 className={`text-lg ${darkMode ? "text-white" : "text-black"}`}>Base</h1>
          <div className="flex items-center gap-2">
            <FaBell className="text-xl" />
            <img src="../assets/user.png" alt="User" className="w-8 h-8 rounded-full" />
          </div>
        </div>
        <div className="p-4 flex-1 mt-12">
          {selectedMenu === "Upload" && <Upload darkMode={darkMode} />}
          {/* Add other components here based on the selected menu */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
