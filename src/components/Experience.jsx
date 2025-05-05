import React, { useState } from 'react';
import '../styles/experience.css';
import { FaMapMarkerAlt, FaTimes } from 'react-icons/fa';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');
  const [selectedCert, setSelectedCert] = useState(null);
  const [certificates] = useState([
    { id: 1, title: 'Responsive Web Certification', image: '/certs/cert1.jpg' },
    { id: 2, title: 'Excel Certification', image: '/certs/cert2.jpg' },
    { id: 3, title: 'Front End Certification', image: '/certs/cert3.jpg' },
    { id: 4, title: 'Full Stack Java Certification', image: '/certs/cert4.jpg' },
    { id: 5, title: 'Java Programming Certification', image: '/certs/cert5.jpg' },
    { id: 6, title: 'C++ Certification', image: '/certs/cert6.jpg' },
    { id: 7, title: 'HTML Certification', image: '/certs/cert7.jpg' },
    { id: 8, title: 'Cloud Security Certification', image: '/certs/cert8.jpg' },
    { id: 9, title: 'Agile Scrum Certification', image: '/certs/cert9.jpg' },
    { id: 10, title: 'AI Certification', image: '/certs/cert10.jpg' },
  ]);

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <section className="experience-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <button 
              className={`tab-button ${activeTab === 'work' ? 'active' : ''}`}
              onClick={() => setActiveTab('work')}
            >
              Work Experience
            </button>
            <button 
              className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              Certificates
            </button>
          </h2>
          <p className="section-subtitle">
            {activeTab === 'work' ? 'My journey' : 'My certifications'}
          </p>
          <div className="divider"></div>
        </div>
        
        {activeTab === 'work' ? (
          <div className="experience-timeline">
            {/* Project Manager - Smarty Hub */}
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">Project Manager</h3>
                  <span className="experience-date">2024 - Present</span>
                </div>
                <p className="experience-company">Capstone Project - Smarty Hub</p>
                <ul className="experience-list">
                  <li><span className="highlight"></span>Led a team of 5 developers in creating an educational platform for elementary students</li>
                  <li><span className="highlight"></span>Coordinated between stakeholders, designers, and developers to ensure project alignment</li>
                  <li><span className="highlight"></span>Implemented Agile methodologies with bi-weekly sprints and stand-up meetings</li>
                  <li><span className="highlight"></span>Managed project timeline and deliverables, ensuring on-time completion</li>
                  <li><span className="highlight"></span>Conducted user testing sessions and incorporated feedback into development</li>
                </ul>
              </div>
            </div>

            {/* Tester Experience */}
            <div className="experience-item">
              <div className="experience-marker"></div>
              <div className="experience-content">
                <div className="experience-header">
                  <h3 className="experience-title">Tester</h3>
                  <span className="experience-date">2023 - 2024</span>
                </div>
                <p className="experience-company">WMSU Dental Clinic Appointment System</p>
                <ul className="experience-list">
                  <li><span className="highlight"></span>Tested and validated key features to ensure system stability and reliability</li>
                  <li><span className="highlight"></span>Collaborated with developers to identify, document, and fix bugs</li>
                  <li><span className="highlight"></span>Conducted usability testing to improve user experience</li>
                  <li><span className="highlight"></span>Prepared test reports and feedback to support continuous improvements</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="certificates-container">
            {certificates.length > 0 ? (
              certificates.map(cert => (
                <div 
                  key={cert.id} 
                  className="certificate-item"
                  onClick={() => openModal(cert)}
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="certificate-image"
                    loading="lazy"
                  />
                  <p className="certificate-title">{cert.title}</p>
                </div>
              ))
            ) : (
              <p className="no-certificates">No certificates to display</p>
            )}
          </div>
        )}

        {/* Certificate Modal */}
        {selectedCert && (
          <div className="certificate-modal">
            <div className="modal-content">
              <button className="close-button" onClick={closeModal}>
                <FaTimes />
              </button>
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="modal-certificate-image"
              />
              <p className="modal-certificate-title">{selectedCert.title}</p>
            </div>
          </div>
        )}

        <div className="experience-footer">
          
          
        </div>
      </div>
    </section>
  );
};

export default Experience;