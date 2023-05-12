import React, { useState } from "react";
import "./Card.css";
import Heart from "../../assets/Heart";
import { useHistory } from "react-router-dom";

function Card({ imgURL, featured, price, desc, details, date, id }) {
  const history = useHistory();

  const [likeURL, setLikeURL] = useState(
    "https://firebasestorage.googleapis.com/v0/b/olxclone-49069.appspot.com/o/assets%2Fheart.png?alt=media&token=b136d8ed-bd86-4123-b975-9a6c4df1e314"
  );
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    if (e.target.getAttribute("data-liked") === "true") {
      setLikeURL(
        "https://firebasestorage.googleapis.com/v0/b/olxclone-49069.appspot.com/o/assets%2Fheart.png?alt=media&token=b136d8ed-bd86-4123-b975-9a6c4df1e314"
      );
      setLiked(false);
    } else {
      setLikeURL(
        "https://cdn-icons-png.flaticon.com/512/138/138533.png?w=740&t=st=1683652802~exp=1683653402~hmac=a1dec4591e8f74e9ab211cbfafd0320ad588fd28dabb22046d2d3e5925fbee85"
      );
      setLiked(true);
    }
  };

  const handlePostView = (uid) => {
    history.push(`/view/${uid}`);
  };
  return (
    <div className="card col-auto" onClick={() => handlePostView(id)}>
      <div className="imgDiv">
        {featured && (
          <div className="featuredDiv">
            <span>FEATURED</span>
          </div>
        )}
        <div className="likeDiv">
          <img
            src={likeURL}
            data-liked={liked}
            alt="dfd"
            width="30px"
            id="likeImg"
            onClick={handleLike}
          />
        </div>
        <img src={imgURL} alt="" className="imgDisplay" />
      </div>
      <div className="detailsDiv">
        <h5 className="price">₹ {price}</h5>
        <h6 className="detai1">{desc}</h6>
        <div className="details2Div">
          <span className="detail2">{details}</span>
        </div>
        <div className="durationDiv">
          <span className="duration">{date}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
