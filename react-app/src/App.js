import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate, restoreUser } from "./store/auth";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Stats from "./components/Stats";
import AddScore from "./components/AddScore";
import CoursePage from './components/CoursePage';

function App() {
  const dispatch = useDispatch();
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        dispatch(restoreUser());
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
        <ProtectedRoute path="/" exact={true} authenticated={authenticated}>
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute path="/stats" exact={true} authenticated={authenticated}>
          <Stats />
        </ProtectedRoute>
        <ProtectedRoute path="/add_score" exact={true} authenticated={authenticated}>
          <AddScore />
        </ProtectedRoute>
        <ProtectedRoute path="/course/:courseId" exact={true} authenticated={authenticated}>
          <CoursePage />
        </ProtectedRoute>
      </Switch>
    </>
  );
}

export default App;
