import React from 'react';

const VideoItem = ({video}) => {
  return <div>
    <h2>{video.snippet.title}</h2>
    <img src={video.snippet.thumbnails.default.url} alt=""/>
  </div>
};

export default VideoItem;