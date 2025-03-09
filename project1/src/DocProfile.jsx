import React from 'react';

const DoctorProfile = () => {
  // Sample data
  const doctor = {
    name: 'Dr. Jane Doe',
    specialty: 'Cardiologist',
    bio: 'With over 15 years of experience, Dr. Jane Doe specializes in advanced cardiovascular treatments and preventive care.',
    photoUrl: 'https://via.placeholder.com/150',
    contact: {
      phone: '(123) 456-7890',
      email: 'jane.doe@example.com',
      address: '123 Medical Lane, Health City, HC 12345',
    },
    socialMedia: {
      linkedin: 'https://www.linkedin.com/in/janedoe',
      twitter: 'https://twitter.com/drjanedoe',
    },
    education: [
      'MD, Harvard Medical School',
      'Residency in Internal Medicine, Johns Hopkins Hospital',
    ],
    certifications: [
      'Board Certified in Cardiology',
      'Advanced Cardiac Life Support (ACLS) Certified',
    ],
    awards: [
      'Top Cardiologist Award 2020',
      'Patient Choice Award 2019',
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <img
            src={doctor.photoUrl}
            alt={doctor.name}
            className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-md mb-4 md:mb-0 md:mr-6"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-gray-800">{doctor.name}</h1>
            <p className="text-lg text-gray-600">{doctor.specialty}</p>
            <p className="mt-4 text-gray-700">{doctor.bio}</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
          <p className="text-gray-700"><strong>Phone:</strong> {doctor.contact.phone}</p>
          <p className="text-gray-700"><strong>Email:</strong> {doctor.contact.email}</p>
          <p className="text-gray-700"><strong>Address:</strong> {doctor.contact.address}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Education</h2>
          <ul className="list-disc list-inside text-gray-700">
            {doctor.education.map((edu, index) => (
              <li key={index}>{edu}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Certifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            {doctor.certifications.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Awards</h2>
          <ul className="list-disc list-inside text-gray-700">
            {doctor.awards.map((award, index) => (
              <li key={index}>{award}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex space-x-4">
          <a href={doctor.socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/24?text=L" alt="LinkedIn" />
          </a>
          <a href={doctor.socialMedia.twitter} target="_blank" rel="noopener noreferrer">
            <img src="https://via.placeholder.com/24?text=T" alt="Twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
