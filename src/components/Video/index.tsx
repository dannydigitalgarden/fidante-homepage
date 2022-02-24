import React from 'react'
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import './_video.scss';

interface Props {
  source: string,
  poster: string
}

const Video = ({source, poster}: Props) => {
  return (
   <div className='fidante-video'> 
      <Player src={source} poster={poster} aspectRatio="16:9">
        <BigPlayButton position="center" />
    </Player>
   </div>
  )
}

export default Video