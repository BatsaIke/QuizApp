import React from 'react';
import styles from './AuthPage.module.css';
import logo from '../../img/apotsiLogo.webp';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';


const AuthPage = () => {
    return (
      <div className={styles.container}>
        <img src={logo} alt="Bulk SMS Apotsi Logo" className={styles.logo} />
        <div className={styles.formsContainer}>
          <LoginForm />
          <SignupForm />
        </div>
      </div>
    );
  };
  
  export default AuthPage;