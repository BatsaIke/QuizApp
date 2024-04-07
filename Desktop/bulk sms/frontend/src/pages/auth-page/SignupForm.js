import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './AuthPage.module.css';
import { signupSchema } from '../../component/validation/validation';
import { useDispatch } from 'react-redux';
import { signupActions } from '../../actions/authAction';
import { set_Alert } from '../../actions/alertAction';
import { useNavigate } from 'react-router';

const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(signupSchema),
    });
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
      // Assuming signupActions is an async action creator
      let res = await dispatch(signupActions(data));
  
      if (res.success) {
        navigate('/dashboard');
        dispatch(set_Alert('Signup Successful, kindly login', 'success', 4000));
    }
    } catch (error) {
      console.error('Signup failed:', error);
      // Handle error, maybe set an error alert
      dispatch(set_Alert('Signup Failed', 'error', 2000));
    }
  };
  
    return (
      <div className={styles.formSection}>
        <h2>Sign Up</h2>
        <p className={styles.marketingText}>Join Bulk SMS Apotsi today to unleash the full potential of mass messaging and grow your business.</p>
  
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <input {...register('name')} className={styles.input} type="text" placeholder="Name" />
          {errors.name && <p className={styles.error}>{errors.name.message}</p>}
          
          <input {...register('email')} className={styles.input} type="email" placeholder="Email" />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          
          <input {...register('password')} className={styles.input} type="password" placeholder="Password" />
          {errors.password && <p className={styles.error}>{errors.password.message}</p>}
          
          <button type="submit" className={styles.button}>Sign Up</button>
        </form>
      </div>
    );
  };
  
  export default SignupForm;