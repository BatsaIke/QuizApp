import React from 'react';
import styles from './ActionButton.module.css';

function ActionButton({ type, onClick, icon, className }) {
  // Combine default class with additional className(s) if provided
  const buttonClass = `${styles.actionButton} ${className || ''}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {icon}
    </button>
  );
}

export default ActionButton;
