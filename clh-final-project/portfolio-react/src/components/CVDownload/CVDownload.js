import React from "react";

class CVDownload extends React.Component {
  constructor(props) {
    super(props);
  }

  downloadCV = () => {
    fetch("http://localhost:8848/cv").then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "cv.json";
        a.click();
      });
      //window.location.href = response.url;
    });
  };
}

export default CVDownload;
