import React from "react";
import axios from "axios";
import SideNav from "../../constants/SideNav/SideNav";
import "./Gallery.css";

class Gallery extends React.Component {
  state = {
    image: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8848/allposts`).then((res) => {
      const image = res.data.data;
      // console.log("This is imageeeeeeee", image);
      this.setState({ image });
    });
  }

  render() {
    console.log("This is image", this.state.image);
    return (
      <div className="gallery-page-container">
        <div className="sidenav-container">
          <SideNav />
        </div>
        <div className="gallery-container">
          {this.state.image.map((img) => (
            <div key={`gallery-${img.id}`}>
              (<img src={img.postPhoto} width="500" height="500" />
              ), (<p className="photo-caption">{img.postCaption}</p>)
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Gallery;
