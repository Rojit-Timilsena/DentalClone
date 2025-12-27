import React, { useState } from 'react'
import { teamMembers } from '../data/siteData'
import '../styles/Team.css'

const Team = () => {
  const [showNotification, setShowNotification] = useState(false)

  const closeNotification = () => {
    setShowNotification(false)
  }

  return (
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
        {showNotification && (
          <div className="team-notification">
            Click on a team member's picture to view more information.
            <span className="close-button" onClick={closeNotification}>&#10006;</span>
          </div>
        )}

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
  )
}

export default Team