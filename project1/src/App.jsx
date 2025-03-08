import React from 'react';
import './App.css';
import LoginPage from './loginpage'; // Ensure 'loginpage.jsx' exists in 'src'
import DashBoard from './Dashboard';
import PatientDashboardPage from './PDashboard';
import Sidebar from './sidebar';
import PatientProfile from './PProfile';
import UploadReport from './UploadReport';
import Schedule from './Schedule';
import DoctorAppointments from './Schedule';
import PatientListView from './PListView';


function App() {
  return (
    
      <div>
      <PatientListView />
    </div>
    
    
  );
}

export default App;
