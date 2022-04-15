import React from "react";
import "../../App.css";
import "./OdooVideo.css";
import YouTube from "react-youtube";

window.YTConfig = {
  host: "https://www.youtube.com",
};

class VideoOdoo extends React.Component {
  render() {
    const opts = {
      height: "400",
      width: "650",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube
        containerClassName={"ytvideo"}
        videoId="CP96yVnXNrY"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default VideoOdoo;
