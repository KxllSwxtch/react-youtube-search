import React from 'react';

import assignedClass from '../Styles/VideoDetail.css';

const VideoDetail = ({video}) => {
  if(!video) {
    return <h1>Loading...</h1>;
  }

  const videoID = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;
  
  return (
    <div className={assignedClass.VideoDetailContainer}>
      <div className={assignedClass.VideoFrame}>
        <iframe 
          src={url}
          className={assignedClass.Iframe}
        >
        </iframe>
      </div>

      <div className={assignedClass.VideoTextContainer}>
        <h1>{video.snippet.title}</h1>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;