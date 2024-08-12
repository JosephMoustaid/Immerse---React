import React, { useState } from 'react';
import axios from 'axios';

const JoinCourse = () => {
  const [roomCode, setRoomCode] = useState('');
  const [alert, setAlert] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate room code length
    if (roomCode.length !== 6) {
      setAlert({
        type: 'danger',
        message: 'Room code must be exactly 6 characters long.'
      });
      return;
    }

    // Replace with your API endpoint for joining a course
    axios.post('/api/join-course', { roomCode })
      .then(response => {
        // Success
        setAlert({
          type: 'success',
          message: 'Successfully joined the course!'
        });
      })
      .catch(error => {
        // Error
        setAlert({
          type: 'danger',
          message: 'Error joining the course. Please try again.'
        });
      });
  };

  return (
    <div className="d-flex justify-content-center mt-5 mb-5">
      <div className="card p-4" style={{ maxWidth: '400px' }}>
        <h2>Join Course</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Room Code</label>
            <input
              type="text"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value)}
              className="form-control"
              maxLength={6} // Enforces a max length of 6 characters
              required
            />
          </div>
          <button type="submit" className="custom-button3 w-100">
            Join
          </button>
        </form>
        {alert && (
          <div className={`alert alert-${alert.type} mt-3`} role="alert">
            {alert.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinCourse;
