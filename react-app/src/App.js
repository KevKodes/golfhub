import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./store/auth";
import * as sessionActions from "./store/auth";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Stats from "./components/Stats";
import AddScore from "./components/AddScore";

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  // const [sessionUser, setSessionUser] = useState({});

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        // setSessionUser(user);
        dispatch(sessionActions.restoreUser());
      }
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      {authenticated && (
        <NavBar setAuthenticated={setAuthenticated} />
      )}
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route>
        <ProtectedRoute path="/dashboard" exact={true} authenticated={authenticated}>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/stats" exact={true} authenticated={authenticated}>
          <Stats />
        </ProtectedRoute>
        <ProtectedRoute path="/add_score" exact={true} authenticated={authenticated}>
          <AddScore />
        </ProtectedRoute>
        <ProtectedRoute path="/course/:courseName" exact={true} authenticated={authenticated}>
          <h1>Add a course component</h1>
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
