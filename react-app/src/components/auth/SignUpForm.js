import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import { login, signUp, setUser } from '../../store/auth';
import './Splash.css'

const SignUpForm = ({authenticated, setAuthenticated}) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        dispatch(setUser(user));
        setAuthenticated(true);
      }
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

  const handleSignupClick = () => {
    history.push('/signup')
  }

  const handleLoginClick = () => {
    console.log('log in click')
  }

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-page">
      <div className="login-wrapper">
        <div className="logo">
          <img src="./tee.jpeg" alt="cool logo"/>
          <h1>Golfhub</h1>
        </div>
        
        <form onSubmit={onSignUp}>
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
      <div className="login-image">
        <img src="https://www.thegrint.com/images/landing/free/background_free.png" alt="just a background"/>
      </div>
    </div>
  );
};

export default SignUpForm;
