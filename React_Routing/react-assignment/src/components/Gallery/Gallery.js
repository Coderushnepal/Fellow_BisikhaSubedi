import React, { Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import { imageList } from "../../constants/imageList";
import "./gallery.css";

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <CarouselProvider
          naturalSlideWidth={800}
          naturalSlideHeight={400}
          totalSlides={imageList.length}
          isPlaying={true}
        >
          <Slider className="slider-image">
            {imageList.map((image, index) => (
              <Slide index={index}>
                <div className="image-container">
                  <div className="review-button">
                    <button
                      onClick={() => {
                        this.props.history.push("/reviews");
                      }}
                      className="btn-primary"
                    >
                      Review this image
                    </button>
                  </div>
                  <img className="image" src={image.url} alt="image-alt"></img>
                </div>
              </Slide>
            ))}
          </Slider>
          <div className="button-container">
            <ButtonBack className="btn-primary">{"<<"}Back</ButtonBack>
            <ButtonNext className="btn-primary">Next{">>"}</ButtonNext>
          </div>
        </CarouselProvider>
      </Fragment>
    );
  }
}
