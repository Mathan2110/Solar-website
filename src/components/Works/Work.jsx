import React from 'react'
import video_image from '../../assets/video_image.webp'
import video_icon from '../../assets/icons/video-icon.svg'
import './Work.css'

const Work = () => {
  return (
    <div className='work_container' id='works'>
        <h1>How Our Power Plant Works</h1>
        <p>Take a behind-the-scenes look at the advanced technology and clean energy processes that drive our solar power plant</p>
        <div className="video_image">
          <img src={video_image} className='image' alt="" />
          <img src={video_icon} className='icon' alt="" />
        </div>
    </div>
  )
}

export default Work