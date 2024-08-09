import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa'; // Import star icon

function Rate() {
  const [rating, setRating] = useState(0); // Default to 0 for unselected stars
  const [hoverRating, setHoverRating] = useState(0); // For hover effect
  const [review, setReview] = useState('');
  const [message, setMessage] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    
    setMessage('Thank you for your feedback!');
    
    setRating(0);
    setReview('');
  };

  return (
    <div className="rate-container mt-5 mb-5 m-auto text-center" style={{ maxWidth: "800px" }}>
      <h2>Rate the Course</h2>
      <h4>Your opinion matter to us!</h4>
      <p>We work hard to provide a unique yet effective learning experience that can help students and people intrested in learning learn fast in an immerssive & engaging environement.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Rating</label>
          <div className="star-rating mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={24}
                color={star <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9"} // Yellow for selected/hovered, grey otherwise
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                style={{ cursor: 'pointer' }}
              />
            ))}
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="review" className="form-label">Review</label>
          <textarea
            id="review"
            className="form-control"
            rows="4"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <button type="submit" className="custom-button3 px-5">Submit Review</button>
        {message && <div className="mt-3 alert alert-success" role="alert">{message}</div>}
      </form>
    </div>
  );
}

export default Rate;
