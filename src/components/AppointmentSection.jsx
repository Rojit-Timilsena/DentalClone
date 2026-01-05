import { useState } from 'react'
import { serviceOptions, doctorOptions } from '../data/siteData'
import { ASSET_PATHS } from '../utils/assetPaths'

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    name: '',
    email: '',
    date: '',
    time: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      // Form submitted successfully
      alert('Appointment booked successfully!')
      
      // Reset form
      setFormData({
        service: '',
        doctor: '',
        name: '',
        email: '',
        date: '',
        time: ''
      })
    } catch (error) {
      alert('Failed to book appointment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div 
      className="container-fluid bg-primary my-5 wow fadeInUp" 
      data-wow-delay="0.1s"
      style={{
        background: `linear-gradient(rgba(9, 30, 62, .85), rgba(9, 30, 62, .85)), url(${ASSET_PATHS.carousel.carousel1bg}) center center no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      <div className="container">
        <div className="row gx-5">
          {/* Left Column - Title and Description */}
          <div className="col-lg-6 py-5">
            <div className="py-5">
              <h1 className="display-5 text-white mb-4">Your Teeth Are Our Priority</h1>
              <p className="text-white mb-0">
                We are committed to lifetime care of your oral health. Our focus on prevention and education will serve our patients well into the future giving them the knowledge to properly care for their teeth and gums. Patients will find modern technology throughout the office that allows us to deliver optimum care in a pain-free manner.
              </p>
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div className="col-lg-6">
            <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
              <h1 className="text-white mb-4">Make Appointment</h1>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  {/* Service Selection */}
                  <div className="col-12 col-sm-6">
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="form-select bg-light border-0" 
                      style={{ height: '55px' }}
                      required
                    >
                      <option value="" disabled>Select A Service</option>
                      {serviceOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Doctor Selection */}
                  <div className="col-12 col-sm-6">
                    <select 
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      className="form-select bg-light border-0" 
                      style={{ height: '55px' }}
                      required
                    >
                      <option value="" disabled>Select Doctor</option>
                      {doctorOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Name Input */}
                  <div className="col-12 col-sm-6">
                    <input 
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0" 
                      placeholder="Your Name" 
                      style={{ height: '55px' }}
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="col-12 col-sm-6">
                    <input 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0" 
                      placeholder="Your Email" 
                      style={{ height: '55px' }}
                      required
                    />
                  </div>

                  {/* Date Input */}
                  <div className="col-12 col-sm-6">
                    <input 
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0"
                      style={{ height: '55px' }}
                      required
                    />
                  </div>

                  {/* Time Input */}
                  <div className="col-12 col-sm-6">
                    <input 
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="form-control bg-light border-0"
                      style={{ height: '55px' }}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <button 
                      className="btn btn-dark w-100 py-3" 
                      type="submit"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Booking...' : 'Make Appointment'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentSection