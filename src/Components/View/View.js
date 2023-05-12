import React, { useContext, useEffect, useState, useCallback } from "react";

import "./View.css";
import { useParams } from "react-router-dom";
import FirebaseContext from "../../contexts/firebaseContext";

function View() {
  const { uid } = useParams();
  const Firebase = useContext(FirebaseContext);

  const [product, setProduct] = useState({});
  const [seller, setSeller] = useState({});

  useEffect(() => {
    Firebase.firestore()
      .collection("Products")
      .doc(uid)
      .get()
      .then((snapshot) => {
        let Price = parseInt(snapshot.data().Price).toLocaleString("en-IN", {
          style: "currency",
          currency: "INR",
        });
        setProduct({
          ...snapshot.data(),
          Price,
        });
      });
  }, []);

  useEffect(() => {
    if (Object.keys(product).length != 0) {
      console.log(product);
      Firebase.firestore()
        .collection("Users")
        .where("id", "==", product.id)
        .get()
        .then((snapshot) => {
          setSeller(snapshot.docs[0].data());
        });
    }
  }, [product]);

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={product.imgURL} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>{product.Price}</p>
          <span>{product.Name}</span>
          <p>{product.Title}</p>
          <span>
            {Object.keys(product).length != 0
              ? new Date(product.timestamp).toDateString()
              : ""}
          </span>
        </div>
        <div className="contactDetails">
          <p>{seller.name}</p>
          <p>{seller.phone}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
