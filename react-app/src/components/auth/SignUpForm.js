import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { login, signUp, setUser } from '../../store/auth';
import './Splash.css'
import logo from '../../assets/tee.jpeg';

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const onSignUp = async (e) => {
    e.preventDefault();
    setErrors([])
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        dispatch(setUser(user));
        setAuthenticated(true);
      } else {
        setErrors(user.errors)
      }
    } else {
      setErrors(["Passwords must match"])
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const handleDemoClick = async (e) => {
    const demoUser = await login("demo@aa.io", "password");
    dispatch(setUser(demoUser));
    setAuthenticated(true);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="login-wrapper" id="auth-form">
        <div className="logo">
          <img src={logo} alt="cool logo"/>
          <h1>Golfhub</h1>
        </div>
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error) => (
              <div className="login-errors">{error}</div>
            ))}
          </div>
          <div>
            <input
              placeholder="Username"
              className="login-input"
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <input
              placeholder="Email"
              className="login-input"
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              placeholder="Password"
              className="login-input"
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              placeholder="Confirm password"
              className="login-input"
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <button type="click" onClick={handleDemoClick} className="demoButton">
          Demo User
        </button>
        <div className="signup-link-box">
          <div className="login-line">
            <p>Already a user?</p>
          </div>
          <button onClick={() => history.push('/login')}>Log In</button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
