import React from 'react'
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import './_video.scss';

const Video = () => {
  return (
    <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  preload poster="https://images.pexels.com/photos/11191002/pexels-photo-11191002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <BigPlayButton position="center" />
    </Player>
  )
}

export default Video