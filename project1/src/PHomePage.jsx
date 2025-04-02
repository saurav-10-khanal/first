import React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const doctors = [
  { 
    id: 1, 
    name: "Dr. Ashmita Singh", 
    specialty: "Cardiologist", 
    experience: "20 years", 
    email: "ashmita.singh@example.com", 
    image: "/Doctor1.png", 
    availability: [4, 7, 11, 14, 18, 22], 
    timing: "9:00 am to 5:00 pm",
    bio: "With 20 years of experience, Dr. Ashmita specializes in advanced cardiovascular treatments and surgeries.",
    rating: 4.8,
    hospital: "Apollo Hospital, New Delhi",
    fee: "Rs1000 per consultation",
    reviews: [
      { id: 1, text: "Highly professional and caring.", patient: "Ravi Kumar" },
      { id: 2, text: "Best cardiologist in the city!", patient: "Priya Verma" }
    ]
  },
  { 
    id: 2, 
    name: "Dr. Rohit Sharma", 
    specialty: "Endocrinologist", 
    experience: "18 years", 
    email: "rohit.sharma@example.com", 
    image: "/doctor2.jpg", 
    availability: [2, 5, 9, 12, 16, 20], 
    bio: "Dr. Rohit is an expert in hormone-related disorders and has helped thousands manage their endocrine health.",
    rating: 4.6,
    hospital: "Fortis Hospital, Mumbai",
    fee: "RS100 per consultation",
    reviews: [
      { id: 1, text: "Very knowledgeable.", patient: "Ananya Sinha" },
      { id: 2, text: "Helped me manage my condition effectively.", patient: "Mohit Kumar" }
    ]
  },
  { 
    id: 3, 
    name: "Dr. Alice Brown", 
    specialty: "Pulmonologist", 
    experience: "22 years", 
    email: "alice.brown@example.com", 
    image: "/doctor3.jpg", 
    availability: [3, 6, 10, 15, 19, 25],
    timing: "9:00 am to 5:00 pm",
    bio: "A renowned pulmonologist, Dr. Alice has extensive experience in treating respiratory diseases and lung conditions.",
    rating: 4.9,
    hospital: "AIIMS, Delhi",
    fee: "$110 per consultation",
    reviews: [
      { id: 1, text: "Amazing doctor, really helped with my breathing issues.", patient: "Karan Mehta" },
      { id: 2, text: "Top pulmonologist, highly recommend!", patient: "Simran Singh" }
    ]
  }
];

const PatientHomePage = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [date, setDate] = useState(new Date());

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const highlightAvailability = (date) => {
    // Check if the day is in the doctor's availability
    if (selectedDoctor) {
      const availableDays = selectedDoctor.availability;
      const day = date.getDate(); // Get the day of the month
      return availableDays.includes(day);
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-green-100 text-gray-900 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center mb-8 text-green-700">Find Your Specialist</h1>

        {/* Doctor Selection and Information */}
        {selectedDoctor ? (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <button
              onClick={() => setSelectedDoctor(null)}
              className="mb-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Back
            </button>
            <img
              src={selectedDoctor.image}
              onError={(e) => (e.target.src = "/fallback.png")}
              alt={selectedDoctor.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border border-gray-300"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{selectedDoctor.name}</h2>
            <p className="text-lg text-gray-600">{selectedDoctor.specialty}</p>
            <p className="text-md text-gray-500">{selectedDoctor.experience} Experience</p>
            <p className="text-md text-gray-700">Email:- {selectedDoctor.email}</p>
            <p className="text-md text-gray-700">Hospital: {selectedDoctor.hospital}</p>
            <p className="text-md text-gray-700">Consultation Fee: {selectedDoctor.fee}</p>
            <p className="text-md text-gray-700">Timing: {selectedDoctor.timing}</p>
            <p className="mt-4 text-gray-700">{selectedDoctor.bio}</p>
            <p className="mt-2 text-yellow-500 font-bold">⭐ {selectedDoctor.rating}/5</p>

            {/* Calendar Section */}
            <p className="mt-4 font-semibold">Available Dates:</p>
            <div className="mt-4">
              <Calendar
                onChange={handleDateChange}
                value={date}
                tileClassName={({ date, view }) => 
                  view === 'month' && highlightAvailability(date) ? 'highlight' : null
                }
              />
            </div>

            {/* Reviews Section with Sliding Cards */}
            <p className="mt-4 font-semibold">Patient Reviews:</p>
            <div className="overflow-x-auto mt-2 space-x-4 p-4 flex">
              {selectedDoctor.reviews.map((review) => (
                <div
                  key={review.id}
                  className="min-w-[400px] bg-grey-600 rounded-lg shadow-lg p-4 border border-black-300"
                >
                  <p className="font-semibold text-sm text-gray-700">"{review.text}"</p>
                  <p className="mt-2 text-sm text-gray-500">- {review.patient}</p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            {/* Render available doctors */}
            <h2 className="text-3xl text-center">Doctors</h2>
            <div className="grid grid-cols-3 gap-6 mt-4">
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
                  onClick={() => handleDoctorClick(doctor)}
                >
                  <img
                    src={doctor.image}
                    onError={(e) => (e.target.src = "/fallback.png")}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-lg text-gray-600">{doctor.specialty}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientHomePage;