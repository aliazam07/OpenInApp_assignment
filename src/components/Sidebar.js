import React, { useState } from 'react';
import { IoSunnyOutline } from "react-icons/io5";
import { LuMoon } from "react-icons/lu";
import { FaTachometerAlt, FaUpload, FaFileInvoice, FaCalendarAlt, FaBell, FaCogs, FaBars } from "react-icons/fa";
import logo from "../assets/logo.png";

const Sidebar = ({ setSelectedMenu, toggleDarkMode, darkMode, isSidebarVisible, toggleSidebarVisibility }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
    toggleSidebarVisibility(); // Hide sidebar on mobile when collapsed
  };

  return (
    <div>
      {/* Top Bar for Mobile and iPad */}
      <div className={`fixed top-0 left-0 w-full flex items-center justify-between p-2 bg-gray-200 dark:bg-gray-700 z-50 md:hidden ${isSidebarVisible ? 'block' : 'hidden'}`}>
        <button onClick={handleToggleSidebar} className="text-xl">
          <FaBars />
        </button>
        <img src={logo} className="w-10 h-10" alt="Logo" />
        <h1 className={`text-lg ${darkMode ? "text-white" : "text-black"}`}>Base</h1>
        <div className="flex items-center gap-2">
          <FaBell className="text-xl" />
          <img src="../assets/user.png" alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </div>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full z-40 ${isSidebarVisible ? 'block' : 'hidden'} md:block`}>
        <div className={`flex ${isSidebarCollapsed ? "flex-col w-16" : "flex-col w-[285px]"} h-full p-4 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} transition-all overflow-y-auto`}>
          {!isSidebarCollapsed && (
            <div className="flex flex-col flex-1 mt-12">
              {/* Logo and Name */}
              <div className="flex items-center mb-8 p-4">
                <img src={logo} className="w-12 h-12" alt="Logo" />
                <h1 className="text-2xl font-bold ml-4">Base</h1>
              </div>

              {/* Menu Items */}
              <div className="space-y-6">
                <MenuItem icon={<FaTachometerAlt />} label="Dashboard" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
                <MenuItem icon={<FaUpload />} label="Upload" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
                <MenuItem icon={<FaFileInvoice />} label="Invoice" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
                <MenuItem icon={<FaCalendarAlt />} label="Schedule" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
                <MenuItem icon={<FaCalendarAlt />} label="Calendar" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
                <MenuItem icon={<FaBell />} label="Notification" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
                <MenuItem icon={<FaCogs />} label="Setting" setSelectedMenu={setSelectedMenu} darkMode={darkMode} />
              </div>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <div className="flex items-center justify-center mt-auto">
            <button
              onClick={toggleDarkMode}
              className={`w-[76px] h-[40px] px-0 py-[4px] flex items-center justify-between rounded-full shadow-md ${darkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}
            >
              <IoSunnyOutline className="text-xl" />
              <LuMoon className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, label, setSelectedMenu, darkMode }) => (
  <div
    className={`flex items-center text-lg cursor-pointer px-3 py-2 rounded-md ${darkMode ? "hover:bg-gray-700 hover:text-blue-400" : "hover:bg-gradient-to-r from-gray-200 to-gray-300 hover:text-blue-500"}`}
    onClick={() => setSelectedMenu(label)}
  >
    {icon}
    <span className="ml-4">{label}</span>
  </div>
);

export default Sidebar;
