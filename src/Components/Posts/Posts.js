import React, { useContext, useEffect, useState } from "react";

import "./Post.css";
import Card from "../Card/Card";
import FirebaseContext from "../../contexts/firebaseContext";

function Posts() {
  const Firebase = useContext(FirebaseContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    Firebase.firestore()
      .collection("Products")
      .get()
      .then((snapshot) => {
        setData(snapshot.docs);
        // const dataLoad = snapshot.docs.map((product) => {
        //   return {
        //     ...product.data(),
        //     id: product.id,
        //   };
        // });
      });
  }, []);
  return (
    <>
      <div className="mainPostersDiv fluid-container">
        <div className="recent row">
          <h4 className="title1">Based on your last Search</h4>
        </div>
        <div className="cardRow row">
          {data.map((post) => {
            const doc = post.data();
            return (
              <Card
                imgURL={doc.imgURL}
                featured={doc.Featured}
                price={doc.Price}
                desc={doc.Title}
                details={doc.Desc}
                date={new Date(doc.timestamp).toDateString()}
                key={post.id}
                id={post.id}
              />
            );
          })}
        </div>
      </div>

      <div className="secondaryPostersDiv fluid-container">
        <div className="recent row">
          <h4 className="title1">Fresh recommendations</h4>
        </div>
        <div className="cardRow row">
          {/* <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card /> */}
        </div>
      </div>
    </>
  );
}

export default Posts;
