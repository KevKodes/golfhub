import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, NavLink } from "react-router-dom";
import { login, setUser } from "../../store/auth";

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

  if (authenticated) {
    history.push('/dashboard');
  }

  return (
    <div className="login-wrapper">
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
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
        <div className="signup-link-text">
          Don't have an account?&nbsp;
            <NavLink
            to="/signup"
            style={{ textDecoration: "none" }}
            className="signUp"
          >
            Sign up
            </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
