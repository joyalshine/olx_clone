import React, { useContext, useEffect } from "react";
import "./App.css";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import AuthContext from "./contexts/AuthContext";
import FirebaseContext from "./contexts/firebaseContext";
import Create from "./Components/Create/Create";
import ViewPost from "./Pages/ViewPost";

function App() {
  const { setUser } = useContext(AuthContext);
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
      <Route path="/view/:uid">
        <ViewPost />
      </Route>
    </div>
  );
}

export default App;
