import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login, setUser } from "../../store/auth";
import './Splash.css'
import logo from '../../assets/tee.jpeg';

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      dispatch(setUser(user));
      setAuthenticated(true);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemoClick = async (e) => {
    const demoUser = await login("demo@aa.io", "password");
    dispatch(setUser(demoUser));
    setAuthenticated(true);
  };

  const handleSignupClick = () => {
    history.push('/signup')
  }

  if (authenticated) {
    history.push('/');
  }

  return (
    <div className="login-page">
      <div className="login-wrapper" id="auth-form">
        <div className="logo">
          <img src={logo} alt="cool logo"/>
          <h1>Golfhub</h1>
        </div>
        <form id="auth-form" onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <input
              className="login-input"
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <input
              className="login-input"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button type="submit">Login</button>
          </div>
        </form>
        <button type="click" onClick={handleDemoClick} className="demoButton">
          Demo User
        </button>
        <div className="signup-link-box">
          <div className="login-line">
            <p>Don't have an account?</p>
          </div>
          <button onClick={handleSignupClick}>Sign Up Free</button>
        </div>
      </div>
      <div className="login-image">
        <img src="https://www.thegrint.com/images/landing/free/background_free.png" alt="just a background"/>
      </div>
    </div>
  );
};

export default LoginForm;
