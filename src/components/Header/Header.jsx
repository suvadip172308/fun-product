import styles from './Header.module.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginContext } from '../../utilities/Context/LoginContextProvider';
import { useContext } from 'react';
import Button from '../../widget/Button/Button';

const Header = () => {
  const navigate = useNavigate();
  
  const {
    isLoggedIn,
    setIsLoggedIn,
    userDetails,
    setUserDetails,
  } = useContext(LoginContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserDetails({});
    localStorage.setItem('token', '');

    navigate('/');
  }
  
  return(
    <header>
      <nav className={styles.headerWrapper}>
        <h1 className={styles.companyName}>Fun Product</h1>
        <div className={styles.navlinkWrapper}>
          <ul className={styles.listContainer}>
            <li>
              <NavLink to='/' className={styles.listItem}>Home</NavLink>
            </li>
            <li>
              <NavLink to='/products' className={styles.listItem}>Products</NavLink>
            </li>
            <li>
              <NavLink to='/conatct' className={styles.listItem}>Contact</NavLink>
            </li>
            {
              isLoggedIn && (
                <>
                  <li className={styles.userInfo}>
                    <img className={styles.userImage} src={userDetails.image} alt='img'/>
                    <span className={styles.userName}>{` Hi ${userDetails?.firstName}`}</span>
                  </li>
                  <li>
                    <Button onBtnClick={handleLogout}>Logout</Button>
                  </li>
                </>
              )
            }
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;