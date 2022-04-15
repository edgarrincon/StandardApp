import React, { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import "../../App.css";
import "./BgVideo.css";
import * as THREE from "three";

const Video = (props) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          THREE,
          color: 0xffc928,
          backgroundColor: 0x000034,
          points: 12.0,
          spacing: 17.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="homepage-video" ref={myRef}>
      <div className="text-over-video">
        <h1>Standards Apps</h1>
        <h4>WEB Development</h4>
      </div>
    </div>
  );
};

export default Video;
