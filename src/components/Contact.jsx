import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-4 g-lg-5">
          {/* Left Column - Contact Information */}
          <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
            <div className="bg-light rounded h-100 p-4 p-lg-5">
              <div className="section-title">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-geo-alt fs-1 text-primary me-3"></i>
                <div className="text-start">
                  <h5 className="mb-0">Demo Dental Clinic</h5>
                  <span>123 Main Street, Demo City, DC 12345</span>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <i className="bi bi-envelope-open fs-1 text-primary me-3"></i>
                <div className="text-start">
                  <h5 className="mb-0">Email Us</h5>
                  <span>info@demodentalclinic.com</span>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <i className="bi bi-telephone fs-1 text-primary me-3"></i>
                <div className="text-start">
                  <h5 className="mb-0">Call Us</h5>
                  <span>(555) 123-4567, (555) 987-6543</span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column - Contact Form */}
          <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <div className="bg-light rounded p-4 p-lg-5 h-100">
              <h3 className="mb-4">Send Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-12">
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-control border-0 bg-white px-4" 
                      placeholder="Your Name" 
                      style={{ height: '55px' }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control border-0 bg-white px-4" 
                      placeholder="Your Email" 
                      style={{ height: '55px' }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input 
                      type="text" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-control border-0 bg-white px-4" 
                      placeholder="Subject" 
                      style={{ height: '55px' }}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-control border-0 bg-white px-4 py-3" 
                      rows="5" 
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn btn-primary w-100 py-3" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column - Google Maps */}
          <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
            <div className="rounded overflow-hidden h-100" style={{ minHeight: '400px' }}>
              <iframe 
                className="w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.8881856907724!2d85.35863409999999!3d27.751594599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b36dc0d0673%3A0x6aa6d617abe7bff6!2sSuhaas%20Dental%20Care!5e0!3m2!1sen!2snp!4v1695105062859!5m2!1sen!2snp" 
                width="600" 
                height="450" 
                style={{ border: 0, minHeight: '400px' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                frameBorder="0" 
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact