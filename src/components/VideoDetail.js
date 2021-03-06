import React from 'react';

const VideoDetail = ({video}) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className={'video-wrapper'}>
        <div className={'ui embed'}>
          <iframe allowFullScreen="allowfullscreen" title={'video player'} src={videoSRC}/>
        </div>
      </div>
      <div className="ui segment">
        <h4 className={'ui header'}>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoDetail;