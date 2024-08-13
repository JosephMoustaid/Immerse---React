import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../../public/logo.png";
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [attempts, setAttempts] = useState(0);

  const navigate = useNavigate();

  // Correct infos of the admin
  const correctEmail = 'immerseAdmin@gmail.com';
  const correctPassword = 'admin@2024';

  // Logic of the  form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // testing iof th einfo are correct
    if (email === correctEmail && password === correctPassword) {
      // success
      navigate('/dashboard');
    } else {
      // Increment attempts and failled message
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        setError('Maximum attempts reached. Please try again later.');
      } else {
        setError('Invalid email or password. Please try again.');
      }
    }

    // Clear form fields on submission
    setEmail('');
    setPassword('');
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-90">
      <div className="card shadow-sm" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">
            <img src={logo} alt="logo" width={50}/> <br />
            Admin Sign In </h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password:</label>
              <input
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn custom-button2 w-100" disabled={attempts >= 3}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
