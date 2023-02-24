import "./login&register.css";
import "./Register.css";

const Register = () => {
  return (
    <div className="login-register">
      <div className="card register-card">
        <div className="left">
          <h1>J Talk</h1>
          <p>
            Welcome to J Talk and share your photos, ideas, and videos with
            others
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register <span></span> </h1>
          <form className="register-form">
            <input type="text" placeholder="User name" />
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
