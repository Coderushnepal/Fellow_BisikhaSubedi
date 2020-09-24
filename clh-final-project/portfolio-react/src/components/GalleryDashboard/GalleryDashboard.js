import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./GalleryDashboard.css";
import axios from "axios";

const CreatePost = () => {
  const history = useHistory();
  const [postCaption, setCaption] = useState("");
  const [postPhoto, setImage] = useState("");
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (url) {
      axios
        .post("http://localhost:8848/createpost", {
          postCaption,
          postPhoto: url,
        })
        // .then((res) => res.json())
        .then((data) => {
          // console.log(data.details);
          // console.log(data);
          history.push("/gallery");
        });
    }
  }, [url]);
  const postDetails = () => {
    const data = new FormData();
    data.append("file", postPhoto);
    data.append("upload_preset", "Portfolio");
    data.append("cloud_name", "bisikha");
    fetch("https://api.cloudinary.com/v1_1/bisikha/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="create">
        <form>
          <label for="caption">Caption</label>
          <input
            type="text"
            placeholder="Caption"
            value={postCaption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </form>
        <form>
          <input
            type="file"
            id="myFile"
            className="filename"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <br />
          <div className="button" onClick={() => postDetails()}>
            Upload
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreatePost;
