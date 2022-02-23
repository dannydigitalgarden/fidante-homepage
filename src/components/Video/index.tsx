import React from 'react'
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import 'video-react/dist/video-react.css';
import './_video.scss';

const Video = () => {
  return (
   <div className='fidante-video'> 
      <Player src="https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4" poster="https://images.pexels.com/photos/11191002/pexels-photo-11191002.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
        <BigPlayButton position="center" />
    </Player>
   </div>
  )
}

export default Video