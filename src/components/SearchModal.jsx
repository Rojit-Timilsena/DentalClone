import { useState, useEffect } from 'react'

const SearchModal = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('')

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleSearch = (e) => {
    e.preventDefault()
    onClose()
  }

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value)
  }

  if (!isOpen) return null

  return (
    <div 
      className="modal fade show d-block" 
      id="searchModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="searchModalLabel"
      aria-hidden={!isOpen}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      style={{ zIndex: 1050 }} // Higher than navbar z-index (1030)
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
          <div className="modal-header border-0">
            <h5 id="searchModalLabel" className="visually-hidden">Search</h5>
            <button 
              type="button" 
              className="btn bg-white btn-close" 
              onClick={onClose}
              aria-label="Close"
              style={{
                backgroundColor: 'white',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                border: '2px solid #06A3DA'
              }}
            ></button>
          </div>
          <div className="modal-body d-flex align-items-center justify-content-center">
            <form onSubmit={handleSearch} className="input-group" style={{ maxWidth: '600px' }}>
              <input 
                type="text" 
                className="form-control bg-white border-primary p-3 text-dark" 
                placeholder="Type search keyword"
                value={searchQuery}
                onChange={handleInputChange}
                autoFocus
                aria-label="Search input"
                style={{ 
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  border: '2px solid #06A3DA'
                }}
              />
              <button 
                className="btn btn-primary px-4" 
                type="submit" 
                aria-label="Search"
                style={{ 
                  backgroundColor: '#06A3DA',
                  borderColor: '#06A3DA',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchModal