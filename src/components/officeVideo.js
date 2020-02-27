import React from 'react';
import video from '../images/videos/office.mp4'
import videoWebm from '../images/videos/office.webm'
import videoPoster from '../images/videos/office-poster.webp';

class OfficeVideo extends React.Component {
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
export default OfficeVideo;