import React from "react";
import videojs from "video.js";
// Styles
import "video.js/dist/video-js.css";
// import './_player-theme.css';
import './_video-player.scss'


interface IVideoPlayerProps {
  options: videojs.PlayerOptions;
}

const initialOptions: videojs.PlayerOptions = {
  controlBar: {
    volumePanel: {
      inline: true
    }
  }
};

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options }) => {
  const videoNode =  React.useRef() as React.MutableRefObject<HTMLVideoElement>;;
  const player = React.useRef<videojs.Player>();

  React.useEffect(() => {
    player.current = videojs(videoNode.current, {
      ...initialOptions,
      ...options
    }).ready(function() {
    });
    return () => {
      if (player.current) {
        player.current.dispose();
      }
    };
  }, [options]);

  return <video ref={videoNode} className="video-js fidante-theme"  />;
};

export default VideoPlayer;
