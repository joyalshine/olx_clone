import React, { useState, useContext } from "react";

import Logo from "../../olx-logo.png";
import "./Signup.css";

import { useHistory } from "react-router-dom";
import FirebaseContext from "../../contexts/firebaseContext";

export default function Signup() {
  const Firebase = useContext(FirebaseContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user;
        user
          .updateProfile({
            displayName: username,
          })
          .then(() => {
            Firebase.firestore()
              .collection("Users")
              .add({
                id: user.uid,
                username: username,
                phone: phoneno,
              })
              .then(() => {
                history.push("/login");
              });
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
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
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone"
            onChange={(e) => setPhoneno(e.target.value)}
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
          <button>Signup</button>
        </form>
        <a onClick={() => history.push("/login")}>Login</a>
      </div>
    </div>
  );
}
