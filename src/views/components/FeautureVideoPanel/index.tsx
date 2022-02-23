import TwoColumnsLayout from 'components/Layouts/TwoColumnsLayout'
import Video from 'components/Video'
import React from 'react'

// {videoSource, poster}: {videoSource: string, poster:string}
const FeatureVideo = () => {
  return (
    <div className='feature-video-panel__video'>
      <Video />
    </div>
  )
}

const FeatureTitle= ({title} : {title: string}) => {
  return (
    <div className='feature-video-panel__title'>
      <h2>{title}</h2>
    </div>
  )
}

const FeatureVideoPanel = () => {
  return (
    <div className='feature-video-panel'>
      <TwoColumnsLayout contentChild={<FeatureTitle title='At Fidante Partners, active investing is at the heart of what we do.' />} mediaChild={<FeatureVideo/>} options={{backgroundColor: 'background-light', layoutType: 'layout-2-3'}}/>
    </div>
  )
}

export default FeatureVideoPanel