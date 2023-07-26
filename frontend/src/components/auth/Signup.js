import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import Alert from './Alert';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState(null); // State for displaying alerts

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://quizqpp.onrender.com/api/v1/users', formData);
      console.log(response.data); // You can handle success messages here

      // Set the success alert
      setAlert({ message: 'Signup successful!', type: 'success' });
      navigate('/')
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error(error.message);
      setAlert({ message: 'Error signing up', type: 'error' });

      // Reset the visible state to true after 3 seconds
      setTimeout(() => {
        setAlert(null);
      }, 3000);
    }
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          {/* Render the alert if it exists */}
          {alert && <Alert message={alert.message} type={alert.type} />}

          <span className="button__text">Sign up now</span>
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="login__input"
                placeholder="name"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="login__input"
                placeholder="Email"
              />
            </div>
            <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="login__input"
                placeholder="Password"
              />
            </div>
            <button className="button login__submit" type="submit">
              <span className="button__text">Sign up</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
            <button className="button login__submit">
              <Link to='/'>
                <span className="button__text">or Sign in here</span>
                <i className="button__icon fas fa-chevron-right"></i>
              </Link>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
