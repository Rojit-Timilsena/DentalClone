import { memo } from 'react'

const LoadingSpinner = memo(() => {
  return (
    <div 
      className="spinner-container d-flex justify-content-center align-items-center vh-100"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'white',
        zIndex: 9999
      }}
    >
      <div className="d-flex">
        <div className="spinner-grow text-primary m-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary m-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
})

LoadingSpinner.displayName = 'LoadingSpinner'

export default LoadingSpinner