import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import FirebaseContext from "../../contexts/firebaseContext";
import AuthContext from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const Create = () => {
  const Firebase = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory();

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user) {
      alert("Login First");
      return;
    }

    let uploadTask = Firebase.storage()
      .ref(`/postImages/${Date.now() + "_" + user.uid}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log("Error Occured");
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          Firebase.firestore()
            .collection("Products")
            .add({
              id: user.uid,
              Name: name,
              Category: category,
              Title: title,
              Desc: desc,
              Price: price,
              Featured: user.Premium ? true : false,
              imgURL: downloadURL,
              timestamp: Date.now(),
            })
            .then(() => {
              Swal.fire("Successfull", "Posted!", "success").then(() => {
                history.push("/");
              });
            });
        });
      }
    );
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form onSubmit={handleSubmit}>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="fname"
              name="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Title</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Price"
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Description</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Price"
              onChange={(e) => setDesc(e.target.value)}
            />
            <br />
            <br />
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={file ? URL.createObjectURL(file) : ""}
            ></img>
            <br />
            <br />
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
