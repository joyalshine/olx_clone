import React from "react";

import "./Post.css";
import Card from "../Card/Card";

function Posts() {
  return (
    <>
      <div className="mainPostersDiv fluid-container">
        <div className="recent row">
          <h4 className="title1">Based on your last Search</h4>
        </div>
        <div className="cardRow row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <div className="secondaryPostersDiv fluid-container">
        <div className="recent row">
          <h4 className="title1">Fresh recommendations</h4>
        </div>
        <div className="cardRow row">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default Posts;
