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
import PatientPaymentSlips from './PaymentSlip';
import HealthSummary from './HealthSummary';
import PharmacyPortal from './Pharmacy';
import AppointmentSection from './AppointmentSection';
import HospitalStats from './HospitalStat';


function App() {
  return (
    
    <div>
      <AppointmentSection/>
      <PatientListView />
      <DoctorProfile/>
      <PatientHomePage/>
      <AppointmentStatusChecklist/>
      <ChatConsultation/>
      <LoginPage/>
      <UploadReport/>
      <PatientPaymentSlips/>
      <HealthSummary/>
      <PharmacyPortal/>
      <DashBoard/>
      <PatientDashboardPage/>
      <HospitalStats/>
      
    </div>
    
    
  );
}

export default App;
