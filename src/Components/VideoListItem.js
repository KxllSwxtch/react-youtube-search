import React from 'react';

import assignedClass from '../Styles/VideoListItem.css';

const VideoListItem = ({video, onVideoSelect}) => {
  const imageURL = video.snippet.thumbnails.high.url;   

  return (
    <div 
      className={assignedClass.VideoListItemContainer}
      onClick={() => onVideoSelect(video)}  
    >
      <div>
        <div>
          <img 
            src={imageURL} 
            alt="Video Thumbnail"
            className={assignedClass.VideoImage}
          />
        </div>

        <div>
          <h1 className={assignedClass.VideoTitle}>{video.snippet.title}</h1>
        </div>
      </div>
    </div>
  );
}

export default VideoListItem;