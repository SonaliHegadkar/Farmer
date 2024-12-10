import React, { useState } from 'react';
import './FeedbackForm.css';
import axios from 'axios';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here, like sending the form data to a server
    axios.post('http://localhost:3001/feedback', { name, email,feedback,rating })
            .then(result => {
                console.log(result)
                setSubmitted(true);
            })
            .catch(err => console.log(err))
  };
  return (
    <div className="feedback-form">
     
      {submitted ? (
        <div className="success-message">
          <p>Thank you for your feedback!</p>
        </div>
      ) : (
        <>
        <h2>Share Your Feedback</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="feedback">Feedback</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Rating</label>
            <div className="rating">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={`rating-star ${value <= rating ? 'filled' : ''}`}
                  onClick={() => setRating(value)}
                >
                  &#9733;
                </span>
              ))}
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
        </>
      )}
    </div>
  );
};

export default FeedbackForm;