// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css'; // Import the CSS file for styling


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://quizqpp.onrender.com//api/v1/auth', formData);
      const token = response.data.token; // Token received from the backend
      localStorage.setItem('accessToken',token);
      console.log('User logged in successfully!');
      navigate('/quiz')
    } catch (error) {
      console.error(error); // Handle error messages here
    }
  }; 

  

  return (
   
<div className="container">
	<div className="screen">
		<div className="screen__content">
    <span className="button__text">Log In Now</span>
			<form className="login" onSubmit={handleSubmit}>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input  type="email" name="email" value={formData.email} onChange={handleChange}  className="login__input" placeholder="Email"/>
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" name="password" value={formData.password} onChange={handleChange} className="login__input" placeholder="Password"/>
				</div>
				<button className="button login__submit" type="submit" >
					<span className="button__text">Log In Now</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>
        <button className="button login__submit" type="submit" >
          <Link to='/signup'>
					<span className="button__text">or Sign up here</span>
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

export default Login;


