import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommonStyles.module.css'; // Import the shared styles

function LandingPage() {
  return (
    <div className={styles.container}> {/* Use the shared styles */}
      <h1>Welcome to Our Astrolabs App</h1>
      <div className="links">
        <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
      </div>
    </div>
  );
}

export default LandingPage;