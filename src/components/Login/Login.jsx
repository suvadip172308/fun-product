import Button from "../../widget/Button/Button";
import styles from './Login.module.css';
import Card from "../../widget/Card/Card";
import Input from "../../widget/Input/Input";
import { useContext, useRef } from "react";
import { LoginContext } from "../../utilities/Context/LoginContextProvider";
import { useNavigate } from "react-router-dom";
import LoginService from "../../utilities/Services/Login";

const Login = () => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserDetails } = useContext(LoginContext);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    const userName = userNameRef.current.value.trim();
    const password = passwordRef.current.value.trim();

    console.log('Username :', userName);
    console.log('Password :', password);

    const response = await LoginService.login({ username: userName, password });

    if(response.status === 200) {
      const {
        id,
        username,
        token,
        firstName,
        lastName,
        gender,
        image
      } = response.data;

      localStorage.setItem('token', token);
      
      setIsLoggedIn(true);
      setUserDetails({
        id,
        userName: username,
        firstName,
        lastName,
        gender,
        image
      });

      console.log("PRODUCTS");

      navigate('products');
    }
  }
  
  return(
    <div className={styles.loginWrapper}>
      <Card className={styles.wrapperCard}>
        <h1 className={styles.loginHeader}>Login</h1>
        <form
          className={styles.formWrapper}
          onSubmit={handleOnSubmit}
        >
          <div className={styles.alignCenter}>
            <Input
             className={styles.loginInput}
             type="text"
             placeholder="Username"
             ref={userNameRef}
            />
          </div>
          <div className={styles.alignCenter}>
            <Input
              className={styles.loginInput}
              type="password"
              placeholder="Password"
              ref={passwordRef}
            />
          </div>
          <div className={`${styles.alignCenter} ${styles.buttonWrapper}`}>
            <Button
              className={styles.loginButton}
              type="submit"
              onBtnClick={handleOnSubmit}
            >
              Login
            </Button>
          </div>
        </form>
      </Card>
    </div>
    
  )
}

export default Login;