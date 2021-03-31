import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/auth";

const LogoutButton = ({ setAuthenticated }) => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    dispatch(logout());
    setAuthenticated(false);
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
