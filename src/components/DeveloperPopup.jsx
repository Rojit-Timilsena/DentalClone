import React from 'react';

const DeveloperPopup = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="popup" style={{ display: show ? 'block' : 'none' }}>
      <div className="popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Message from Developer (Rojit Timilsena):</h2>
        <p><strong>This website is currently under construction. We apologize for any inconvenience.</strong></p>
      </div>
      
      <style jsx>{`
        .popup {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
          z-index: 999;
        }

        .popup-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fff;
          padding: 20px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
          text-align: center;
        }

        .close {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 20px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default DeveloperPopup;