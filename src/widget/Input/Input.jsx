import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({ type, placeholder, className }, ref) => {
  return (
    <>
      <input
        type={type}
        ref={ref}
        className={`${styles.inputWrapper} ${className}`}
        placeholder={placeholder}
      />
    </>
  );
});

export default Input;