import API from "../API/APICalls"

const LoginService = {
  login: (body) => {
    return API.post('/auth/login', body);
  }
};

export default LoginService;