import React from 'react';
import styles from './Button.module.css';

function Button({ label, icon, onClick, className }) {
  return (
    <button className={`${styles.button} ${className}`} onClick={onClick}>
      {icon && <i className={`icon-${icon}`}></i>}
      {label}
    </button>
  );
}

export default Button;
