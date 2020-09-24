import React, { Fragment } from "react";
import axios from "axios";
import SideNav from "../../constants/SideNav/SideNav";
import "./Gallery.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

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
    // console.log("This is image", this.state.image);
    return (
      <Fragment>
        <CarouselProvider
          naturalSlideWidth={800}
          naturalSlideHeight={400}
          totalSlides={this.state.image.length}
          isPlaying={true}
        >
          <div className="gallery-page-container">
            <div className="sidenav-container">
              <SideNav />
            </div>
            <div className="slider-container">
              <ButtonBack className="slider-btn-primary slider-button-left">
                <i class="fas fa-chevron-left"></i>
              </ButtonBack>
              <Slider className="slider-image">
                <div className="gallery-container">
                  {this.state.image.map((img, index) => (
                    <Slide index={index}>
                      <div
                        className="gallery-wrapper image-container"
                        key={`gallery-${img.id}`}
                      >
                        <img
                          src={img.postPhoto}
                          className="gallery-image image"
                        />
                        <p className="photo-caption">{img.postCaption}</p>
                      </div>
                    </Slide>
                  ))}
                </div>
              </Slider>
              <ButtonNext className="slider-btn-primary slider-button-right">
                <i class="fas fa-chevron-right"></i>
              </ButtonNext>
            </div>
          </div>
        </CarouselProvider>
      </Fragment>
    );
  }
}

export default Gallery;
