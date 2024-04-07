// TextInput.js
import React from 'react';
import styles from './TextInput.module.css';

function TextInput({ placeholder, onChange,value,type }) {
  return <input type={type} className={styles.textInput} placeholder={placeholder} onChange={onChange} value={value} />;
}

export default TextInput;
