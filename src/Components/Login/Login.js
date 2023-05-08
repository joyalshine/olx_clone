import React, { useState, useContext } from "react";
import Swal from "sweetalert2";

import Logo from "../../olx-logo.png";
import "./Login.css";
import { useHistory } from "react-router-dom";
import FirebaseContext from "../../contexts/firebaseContext";

function Login() {
  const history = useHistory();
  const Firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        Swal.fire("Successfull", "Logged In Succesfully!", "success").then(
          () => {
            history.push("/");
          }
        );
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Swal.fire("oops!", errorMessage, "error");
      });
  };
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a
          onClick={() => {
            history.push("/signup");
          }}
        >
          Signup
        </a>
      </div>
    </div>
  );
}

export default Login;
