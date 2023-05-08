import React from "react";

import Heart from "../../assets/Heart";
import "./Post.css";

function Posts() {
  return (
    <div className="mainPostersDiv fluid-container">
      <div className="recent row">
        <h4 className="title1">Based on your last Search</h4>
      </div>
      <div className="cardRow row">
        <div className="card col-auto">
          <div className="imgDiv">
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/sa0juoakhdj92-IN/image;s=300x600;q=60"
              alt=""
              className="imgDisplay"
            />
          </div>
          <div className="detailsDiv">
            <h5 className="price">₹ 7,30,000</h5>
            <h6 className="detai1">2017 - 40,000 km</h6>
            <div className="details2Div">
              <span className="detail2">
                Honda WR-V i-VTEC VX, 2017, Petrol,cddecde ds
              </span>
            </div>
            <div className="durationDiv">
              <span className="duration">JUN 5</span>
            </div>
          </div>
        </div>

        <div className="card col-auto">
          <div className="imgDiv">
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/sa0juoakhdj92-IN/image;s=300x600;q=60"
              alt=""
              className="imgDisplay"
            />
          </div>
          <div className="detailsDiv">
            <h5 className="price">₹ 7,30,000</h5>
            <h6 className="detai1">2017 - 40,000 km</h6>
            <div className="details2Div">
              <span className="detail2">
                Honda WR-V i-VTEC VX, 2017, Petrol,cddecde ds
              </span>
            </div>
            <div className="durationDiv">
              <span className="duration">JUN 5</span>
            </div>
          </div>
        </div>
        <div className="card col-auto">
          <div className="imgDiv">
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/sa0juoakhdj92-IN/image;s=300x600;q=60"
              alt=""
              className="imgDisplay"
            />
          </div>
          <div className="detailsDiv">
            <h5 className="price">₹ 7,30,000</h5>
            <h6 className="detai1">2017 - 40,000 km</h6>
            <div className="details2Div">
              <span className="detail2">
                Honda WR-V i-VTEC VX, 2017, Petrol,cddecde ds
              </span>
            </div>
            <div className="durationDiv">
              <span className="duration">JUN 5</span>
            </div>
          </div>
        </div>
        <div className="card col-auto">
          <div className="imgDiv">
            <div className="featuredDiv">
              <span>FEATURED</span>
            </div>
            <div className="likeDiv">
              <Heart />
            </div>
            <img
              src="https://apollo-singapore.akamaized.net/v1/files/sa0juoakhdj92-IN/image;s=300x600;q=60"
              alt=""
              className="imgDisplay"
            />
          </div>
          <div className="detailsDiv">
            <h5 className="price">₹ 7,30,000</h5>
            <h6 className="detai1">2017 - 40,000 km</h6>
            <div className="details2Div">
              <span className="detail2">
                Honda WR-V i-VTEC VX, 2017, Petrol,cddecde ds
              </span>
            </div>
            <div className="durationDiv">
              <span className="duration">JUN 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
