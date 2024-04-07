import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from './AuthPage.module.css';
import { loginSchema } from '../../component/validation/validation';
import { useDispatch } from 'react-redux';
import { loginActions, signupActions } from '../../actions/authAction';
import { set_Alert } from '../../actions/alertAction';
import { useNavigate } from 'react-router';

const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(loginSchema),
  });
const dispatch = useDispatch()
const navigate= useNavigate()

  const onSubmit =async data => {
    console.log(data);
    try {
        let res = await dispatch(loginActions(data))
    console.log(res, 'response here')
    if (res.success) {
        navigate('/dashboard');
        dispatch(set_Alert('Login Successful', 'success', 4000));
    }
  }
     catch (error) {
        console.log(error)
    }
}
    

  return (
    <div className={styles.formSection}>
      <h2>Login</h2>
      <p className={styles.marketingText}>Access the most powerful SMS tools with Bulk SMS Apotsi. Connect with your audience effortlessly.</p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <input {...register('email')} className={styles.input} type="email" placeholder="Email" />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        
        <input {...register('password')} className={styles.input} type="password" placeholder="Password" />
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}
        
        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
