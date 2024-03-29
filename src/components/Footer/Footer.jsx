import styles from './Footer.module.css';

const Footer = () => {
  return(
    <footer>
      <div className={styles.footerWrapper}>
        <span>&copy; By Suvadip Ghosh | 2024</span>
      </div>
    </footer>
  );
}

export default Footer;