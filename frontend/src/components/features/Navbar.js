// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ isLoggedIn, handleLogout }) {
  const renderNavigationLinks = () => {
    if (isLoggedIn) {
      // User is logged in, show "Home" and "Logout" buttons
      return (
        <>
          <li>
            <Link to="/quiz">Home</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Logout</button>
          </li>
        </>
      );
    } else {
      // User is logged out, show "Login" and "Sign Up" buttons
      return (
        <>
          <li>
            <Link to="/">Log In</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
        </>
      );
    }
  };

  return (
    <div className="navbar">
      <div className="container">
        <nav>
          <ul>
            {renderNavigationLinks()}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
