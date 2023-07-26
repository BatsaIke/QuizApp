// App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Quiz from './components/Quiz';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Navbar from './components/Navbar';
// import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    // Check if the user is already logged in 
    const accessToken = localStorage.getItem('accessToken');
    setIsLoggedIn(accessToken !== null); // Set isLoggedIn to true if accessToken is present, otherwise set to false
  }, []);

 
  const handleLogin = (accessToken) => {
    localStorage.setItem('accessToken', accessToken);
    setIsLoggedIn(true);
    // Navigate to the quiz page after successful login
    navigate('/quiz');
  };

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} /> {/* Pass isLoggedIn and handleLogout as props */}
      <div className="container">
        <Routes>
          
        <Route
          path='quiz'
           element={<Quiz />}  
        />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login handleLogin={handleLogin} />} /> {/* Pass handleLogin as prop to Login */}
        </Routes>
      </div>
    </>
  );
}

export default App;
