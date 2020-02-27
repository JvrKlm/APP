import React from 'react';
import video from '../images/videos/video-usluge.mp4'
import videoWebm from '../images/videos/video-usluge.webm'
import videoPoster from '../images/videos/video-usluge-poster.jpg';

class VideoUsluge extends React.Component {
  render() {
    return (
      <div className="video-container">
        <video className="video" poster={videoPoster} playsInline autoPlay muted loop preload="none">
          <source src={videoWebm} type='video/webm;codecs="vp8, vorbis"' />
          <source src={video} type='video/mp4;codecs="avc1.42E01E, mp4a.40.2"' />
        </video>
      </div>
    )
  }
}
export default VideoUsluge;