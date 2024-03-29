import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './Layout.module.css';
import { LoginContext } from "../../utilities/Context/LoginContextProvider";
import { useContext } from "react";

const Layout = () => {
  const { isLoggedIn } = useContext(LoginContext);
  return(
    <div>
      {isLoggedIn && <Header/>}
      <main className={styles.container}>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;