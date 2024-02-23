import React, { useState } from 'react';
import axios from 'axios';
import styles from './CommonStyles.module.css'; // Import the shared styles

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/register`, { email, password });
      setMessage('Registration successful. Please log in.');
    } catch (error) {
      setMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}> {/* Use the shared styles */}
      <h2>Register</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;