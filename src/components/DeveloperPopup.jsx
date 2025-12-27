import React from 'react';

const DeveloperPopup = ({ show, onClose }) => {
  if (!show) return null;

  const popupStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
    display: show ? 'block' : 'none'
  };

  const popupContentStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '30px',
    boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '500px',
    width: '90%'
  };

  const closeStyles = {
    position: 'absolute',
    top: '15px',
    right: '20px',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#999',
    fontWeight: 'bold'
  };

  return (
    <div style={popupStyles}>
      <div style={popupContentStyles}>
        <span style={closeStyles} onClick={onClose}>&times;</span>
        <h2 style={{ color: '#06A3DA', marginBottom: '20px' }}>Message from Developer (Rojit Timilsena):</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          <strong>This website is currently under construction. We apologize for any inconvenience.</strong>
        </p>
      </div>
    </div>
  );
};

export default DeveloperPopup;