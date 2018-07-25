import React, { Component } from 'react';

import VideoListItem from './VideoListItem';
import assignedClass from '../Styles/VideoList.css';

const VideoList = ({videos, onVideoSelect}) => (
  <ul className={assignedClass.VideoListContainer}>
    {videos.map((video, index, array) => {
      return (
        <VideoListItem 
          video={video} 
          key={video.etag}
          onVideoSelect={onVideoSelect}
        />
      );
    })}
  </ul>
);

export default VideoList;