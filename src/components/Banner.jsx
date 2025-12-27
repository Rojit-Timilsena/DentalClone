import { useState, useEffect } from 'react'
import { initializeTempusDominus } from '../utils/externalLibraries'

const Banner = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedService, setSelectedService] = useState('')

  // Initialize Tempus Dominus after component mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      initializeTempusDominus()
    }, 100) // Small delay to ensure DOM is ready

    return () => clearTimeout(timer)
  }, [])

  const handleSearchDoctor = (e) => {
    e.preventDefault()
    if (selectedDate && selectedService) {
      // Handle doctor search logic
      console.log('Searching doctor for:', { date: selectedDate, service: selectedService })
      // In a real app, this would navigate to search results or show available doctors
    } else {
      alert('Please select both date and service')
    }
  }

  const handleAppointmentClick = (e) => {
    e.preventDefault()
    // Navigate to appointment section
    const appointmentSection = document.getElementById('appointment')
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="container-fluid banner mb-3 mb-lg-5">
      <div className="container">
        <div className="row g-3 g-lg-0">
          {/* Opening Hours Card */}
          <div className="col-12 col-md-4 wow zoomIn" data-wow-delay="0.1s">
            <div className="bg-primary d-flex flex-column p-4 p-lg-5 h-100" style={{ minHeight: '250px' }}>
              <h3 className="text-white mb-3 fs-5 fs-lg-4">Opening Hours</h3>
              <div className="d-flex justify-content-between text-white mb-2 mb-lg-3">
                <h6 className="text-white mb-0 small">Sunday-Friday</h6>
                <p className="mb-0 small">09:00 – 18:30</p>
              </div>
              <div className="d-flex justify-content-between text-white mb-3 mb-lg-4">
                <h6 className="text-white mb-0 small">Saturday</h6>
                <p className="mb-0 small">09:00 – 17:30</p>
              </div>
              <a className="btn btn-light mt-auto" style={{ padding: '8px 16px', minHeight: '44px', fontSize: '14px' }} href="#appointment" onClick={handleAppointmentClick}>
                Appointment
              </a>
            </div>
          </div>

          {/* Search A Doctor Card */}
          <div className="col-12 col-md-4 wow zoomIn" data-wow-delay="0.3s">
            <div className="bg-dark d-flex flex-column p-4 p-lg-5 h-100" style={{ minHeight: '250px' }}>
              <h3 className="text-white mb-3 fs-5 fs-lg-4">Search A Doctor</h3>
              
              {/* Date Picker */}
              <div className="date mb-3" id="date" data-target-input="nearest">
                <input 
                  type="text" 
                  className="form-control bg-light border-0 datetimepicker-input"
                  placeholder="Appointment Date" 
                  data-target="#date" 
                  data-toggle="datetimepicker" 
                  style={{ height: '40px' }}
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                />
              </div>

              {/* Service Selection */}
              <select 
                className="form-select bg-light border-0 mb-3" 
                style={{ height: '40px' }}
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="">Select A Service</option>
                <option value="1">Teeth cleaning</option>
                <option value="2">Consultation</option>
              </select>

              <a className="btn btn-light mt-auto" style={{ padding: '8px 16px', minHeight: '44px', fontSize: '14px' }} href="#search" onClick={handleSearchDoctor}>
                Search Doctor
              </a>
            </div>
          </div>

          {/* Make Appointment Card */}
          <div className="col-12 col-md-4 wow zoomIn" data-wow-delay="0.6s">
            <div className="bg-secondary d-flex flex-column p-4 p-lg-5 h-100" style={{ minHeight: '250px' }}>
              <h3 className="text-white mb-3 fs-5 fs-lg-4">Make Appointment</h3>
              <p className="text-white mb-4 small">
                Say goodbye to long wait times! Book your dental appointment online in just a few clicks and enjoy the convenience of a healthier smile on your schedule.
              </p>
              <a className="btn btn-primary mt-auto" style={{ padding: '8px 16px', minHeight: '44px', fontSize: '14px' }} href="#appointment" onClick={handleAppointmentClick}>
                Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner