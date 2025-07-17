/* eslint-disable no-self-assign */
import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ play, setPlay }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlay(false);
      const iframe = player.current.querySelector("iframe");
      if (iframe) {
        iframe.contentWindow.postMessage(
          '{"event":"command","func":"stopVideo","args":""}',
          "*"
        );
      }
    }
    // Reloads the iframe when vid is reopened (to enable auto play)
    if (play) {
      const iframe = player.current.querySelector("iframe");
      if (iframe) {
        iframe.src = iframe.src; // Reloads the iframe
      }
    }
  };
  return (
    <div
      className={`videoPlayer ${play ? "" : "hide"} `}
      ref={player}
      onClick={closePlayer}
    >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fkSxY2JCniw?controls=1&autoplay=1&mute=1&enablejsapi=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoPlayer;
