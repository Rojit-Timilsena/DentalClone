import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter signup logic here
    // Reset form
    setEmail('')
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <>
      {/* Newsletter Start */}
      <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zIndex: 1 }}>
        <div className="container">
          <div className="bg-primary p-5">
            <form className="mx-auto" style={{ maxWidth: '600px' }} onSubmit={handleSubmit}>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control border-white p-3" 
                  placeholder="Your Email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
                <button className="btn btn-dark px-4" type="submit">
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* Newsletter End */}
    </>
  )
}

export default Newsletter