import React, { useState } from 'react';
import axios from 'axios';
import styles from './CommonStyles.module.css'; // Import the shared styles

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, { email, password });
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful.');
    } catch (error) {
      setMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className={styles.container}> {/* Use the shared styles */}
      <h2>Login</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;