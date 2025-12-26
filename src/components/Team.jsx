import React, { useState } from 'react'
import { teamMembers } from '../data/siteData'

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
          margin-top: 10px;
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
          {/* Section Title */}
          <div className="row mb-5">
            <div className="col-12 text-center">
              <div className="section-title">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Team</h5>
                <h1 className="display-5 mb-0">Meet Our Professional Team</h1>
              </div>
            </div>
          </div>

          {/* Notification Section */}
          <div className="notification" id="team-notification">
            Click on a team member's picture to view more information.
            <span className="close-button" onClick={closeNotification}>&#10006;</span>
          </div>

          <div className="team-members-container">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-member">
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                  <div className="overlay">
                    <div className="social-icons">
                      {member.socialLinks.map((social, index) => (
                        <a key={index} href={social.url} className="social-icon">
                          <i className={`fab fa-${social.platform} fw-normal`}></i>
                        </a>
                      ))}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Team