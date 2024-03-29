import styles from './Button.module.css';

const Button = ({children, className, type, onBtnClick}) => {
  return(
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onBtnClick}
    >
      {children}
    </button>
  )
}

export default Button;