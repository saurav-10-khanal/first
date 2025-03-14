// components/Sidebar.tsx
import React from 'react';

const Sidebar  = () => {
  return (
    <aside className="bg-teal-800 text-white w-64 h-screen p-4">
      {/* Logo or Title */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">MyHospital</h1>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block py-2 px-3 rounded bg-white text-teal-800 hover:bg-teal-600 hover:text-white">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 rounded bg-white text-teal-800 hover:bg-teal-600 hover:text-white">
              Appointments
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 rounded bg-white text-teal-800 hover:bg-teal-600 hover:text-white">
              Patients
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-3 rounded bg-white text-teal-800 hover:bg-teal-600 hover:text-white">
              Reports
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;