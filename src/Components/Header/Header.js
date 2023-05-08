import React, { useContext, useEffect, useState } from "react";
import FirebaseContext from "../../contexts/firebaseContext";
import { useHistory } from "react-router-dom";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import AuthContext from "../../contexts/AuthContext";

function Header() {
  const Firebase = useContext(FirebaseContext);
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    Firebase.auth()
      .signOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleLogin = () => {
    history.push("/login");
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input className="locationInput" type="text" placeholder="India" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find Cars,Mobile Phones and More..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? (
            <a
              style={{ fontWeight: "700" }}
              className="loginLogoutBtn"
              onClick={handleLogout}
            >
              Logout
            </a>
          ) : (
            <a
              style={{ fontWeight: "700" }}
              className="loginLogoutBtn"
              onClick={handleLogin}
            >
              Login
            </a>
          )}

          <hr />
        </div>

        <div className="sellMenu" style={{ marginRight: "10px" }}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
