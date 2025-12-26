import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container d-flex justify-content-center align-items-center vh-100">
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
  );
};

export default LoadingSpinner;