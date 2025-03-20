// components/PatientSidebar.tsx
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const PatientSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-3 text-white bg-gray-900 fixed top-4 left-4 rounded-lg"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 h-screen p-4 fixed transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-64"
        } md:translate-x-0 md:relative`}
      >
        {/* Logo / Title */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold">MyHospital</h1>
        </div>

        {/* Nav Links */}
        <nav>
          <ul className="space-y-2">
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Dashboard
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Book Appointment
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Appointment Status
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                View Doctors
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Payment Slips
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Upload Reports
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Health Summary
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Messages
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Pharmacy
              </div>
            </li>
            <li>
              <div className="block py-2 px-3 rounded hover:bg-gray-700 cursor-pointer">
                Settings
              </div>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default PatientSidebar;
