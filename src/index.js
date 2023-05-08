import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FirebaseContext from "./contexts/firebaseContext";
import Firebase from "./firebase/Config";
import AuthContext from "./contexts/AuthContext";

const Root = () => {
  const [user, setUser] = useState("");

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <FirebaseContext.Provider value={Firebase}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </AuthContext.Provider>
  );
};
ReactDOM.render(<Root />, document.getElementById("root"));
