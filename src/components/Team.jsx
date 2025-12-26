import React, { useState } from 'react'

// Import team images
import team1Image from '../assets/images/team/team-1.jpg'
import team2Image from '../assets/images/team/team-2.jpg'
import bhuwanImage from '../assets/images/team/bhuwan.png'

// Team member data exactly as in original
const teamMembers = [
  {
    id: 1,
    name: "Dr. Lok Raj Dhakal",
    position: "Principal Dentist / Managing Director",
    image: team2Image,
    bio: "Dr. Lok is a firm believer of professional growth and development, continuously trying to get his best in Dentistry. He is a registered Dentist, graduated from Kathmandu University.Having experience of more than 12 years as a dental professional, carries experience of 6 years from Dental clinics in UK. He holds Masters Degree in Marketing and Innovation from Anglia Ruskin University, UK. He is an enthusiast of scientific management.",
    contact: "dr.lok@gmail.com"
  },
  {
    id: 2,
    name: "Dr. Bhuwan Sharma",
    position: "Dental Surgeon",
    image: bhuwanImage,
    bio: "Dr. Bhuwan is the dentist you want to see for all your dental needs. His passion for dentistry is evident in the quality of care he provides to each and every patient. With his degree from Kathmandu University and his commitment to continuing education, Dr. Bhuwan is equipped with the knowledge and skills to provide the best possible dental care. He takes pride in delivering treatments that are tailored to each individual patient and their unique needs, ensuring a comfortable and stress-free experience.",
    contact: "dr.bhuwan@gmail.com"
  },
  {
    id: 3,
    name: "DH. Anjana Parajuli",
    position: "Dental Hygienist",
    image: team1Image,
    bio: "DH. Anjana Parajuli is a dental hygienist who provides quality oral care to patients of all ages, with a focus on prevention and education.Anjana Parajuli, graduated as a Dental Hygienist from CTEVT in 2009. She is result oriented and positive about the treatment she has to offer to everyone including children and young adults to elderly. During the appointment Anjana will pay attention to details and offer advice on maintaining oral hygiene in long run. Her treatments include Oral Hygiene care, Periodontal maintenance, Child Oral Care etc.",
    contact: "dh.anjana@gmail.com"
  }
]

const Team = () => {
  const [showNotification, setShowNotification] = useState(false)

  const closeNotification = () => {
    setShowNotification(false)
  }

  return (
    <>
      {/* Exact CSS styling from original HTML */}
      <style jsx>{`
        .team-members-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }

        .team-member {
          flex: 0 0 calc(33.33% - 20px);
          margin: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
        }

        .member-image {
          position: relative;
          overflow: hidden;
          border-radius: 50%;
        }

        .member-image img {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          object-fit: cover;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          opacity: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.3s ease;
        }

        .member-image:hover .overlay {
          opacity: 1;
        }

        .social-icons {
          text-align: center;
        }

        .social-icon {
          text-decoration: none;
          color: #fff;
          font-size: 20px;
          margin: 0 10px;
        }

        .member-info {
          text-align: center;
          margin-top: 10px;
        }

        .member-info h3 {
          margin: 0;
          font-size: 24px;
        }

        .post-text {
          margin: 0;
          font-size: 16px;
          color: #000080;
          font-weight: bold;
        }

        .member-details {
          display: none;
          background-color: #f5f5f5;
          padding: 10px;
          border-radius: 5px;
          text-align: center;
        }

        .team-member:hover .member-details {
          display: block;
        }

        @media (max-width: 768px) {
          .team-member {
            flex: 0 0 calc(50% - 20px);
          }
        }

        .notification {
          position: fixed;
          top: 20px;
          right: 20px;
          background-color: #007bff;
          color: #fff;
          padding: 10px 20px;
          border-radius: 5px;
          display: ${showNotification ? 'block' : 'none'};
          z-index: 999;
        }

        .notification .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
      `}</style>

      <div className="container-fluid py-5">
        <div className="container">
          {/* Notification Section */}
          <div className="notification" id="team-notification">
            Click on a team member's picture to view more information.
            <span className="close-button" onClick={closeNotification}>&#10006;</span>
          </div>

          <div className="team-members-container">
            {teamMembers.map((member, index) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="overlay">
                    <div className="social-icons">
                      <a href="#" className="social-icon">
                        <i className="fab fa-twitter fw-normal"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-facebook-f fw-normal"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-linkedin-in fw-normal"></i>
                      </a>
                      <a href="#" className="social-icon">
                        <i className="fab fa-instagram fw-normal"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="post-text">{member.position}</p>
                </div>
                {/* Additional Info */}
                <div className="member-details">
                  <p>{member.bio}</p>
                  <p>Contact: {member.contact}</p>
                </div>
                {index < teamMembers.length - 1 && <br />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team