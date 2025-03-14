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
import DoctorProfile from './DocProfile';
import PatientHomePage from './PHomePage';
import AppointmentStatusChecklist from './AppointmentCheck';
import ChatConsultation from './ChatBox';


function App() {
  return (
    
    <div>
      <PatientListView />
      <DoctorProfile/>
      <PatientHomePage/>
      <AppointmentStatusChecklist/>
      <ChatConsultation/>
      
    </div>
    
    
  );
}

export default App;
