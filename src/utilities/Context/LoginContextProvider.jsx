import axios from "axios";
import { createContext, useState, useEffect, useMemo, useContext } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token',token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
      isLoggedIn,
      setIsLoggedIn,
      userDetails,
      setUserDetails,
    }),
    [token, isLoggedIn, userDetails]
  );


  return(
    <LoginContext.Provider 
      value={contextValue}
    >
      { children }
    </LoginContext.Provider>
  );
}

export const useLoginContext = () => {
  return useContext(LoginContext);
};

export default LoginContextProvider;