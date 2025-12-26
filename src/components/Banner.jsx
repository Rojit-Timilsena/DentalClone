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
    <div className="container-fluid banner mb-5">
      <div className="container">
        <div className="row gx-0">
          {/* Opening Hours Card */}
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
            <div className="bg-primary d-flex flex-column p-5" style={{ height: '300px' }}>
              <h3 className="text-white mb-3">Opening Hours</h3>
              <div className="d-flex justify-content-between text-white mb-3">
                <h6 className="text-white mb-0">Sunday-Friday</h6>
                <p className="mb-0">09:00 – 18:30</p>
              </div>
              <div className="d-flex justify-content-between text-white mb-3">
                <h6 className="text-white mb-0">Saturday</h6>
                <p className="mb-0">09:00 – 17:30</p>
              </div>
              <a className="btn btn-light" href="#appointment" onClick={handleAppointmentClick}>
                Appointment
              </a>
            </div>
          </div>

          {/* Search A Doctor Card */}
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div className="bg-dark d-flex flex-column p-5" style={{ height: '300px' }}>
              <h3 className="text-white mb-3">Search A Doctor</h3>
              
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

              <a className="btn btn-light" href="#search" onClick={handleSearchDoctor}>
                Search Doctor
              </a>
            </div>
          </div>

          {/* Make Appointment Card */}
          <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
            <div className="bg-secondary d-flex flex-column p-5" style={{ height: '300px' }}>
              <h3 className="text-white mb-3">Make Appointment</h3>
              <p className="text-white">
                Say goodbye to long wait times! Book your dental appointment online in just a few clicks and enjoy the convenience of a healthier smile on your schedule.
              </p>
              <h2 className="text-white mb-0"></h2>
              <a className="btn btn-primary py-2 px-4 ms-3" href="#appointment" onClick={handleAppointmentClick}>
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