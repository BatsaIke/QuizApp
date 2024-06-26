// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children, className, footer }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={`${styles.modal} ${className}`}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>

        {/* Scrollable content area */}
        <div className={styles.content}>
          {children}
        </div>

        {/* Fixed footer area */}
        {footer && <div className={styles.footer}>{footer}</div>}
      </div>
    </>,
    document.getElementById('modal-root')
  );
};

export default Modal;
