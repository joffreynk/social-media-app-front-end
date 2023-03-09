import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/authContext";

import "./login&register.css";
import "./Login.css";

const Login = () => {

  const {login} = useContext(AuthContext)
  
  const handleSubmit  = (event) => {
    event.preventDefault();
    login();

  }
  return (
    <div className="login-register">
      <div className="card">
        <div className="left">
          <h1>J Talk</h1>
          <p>
            Welcome to J Talk and share your photos, ideas, and videos with
            others
          </p>
          <span>Don't you have an account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login <span></span> </h1>
          <form>
            <input type="text" placeholder="User name" />
            <input type="password" placeholder="Password" />
            <button onClick={handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
