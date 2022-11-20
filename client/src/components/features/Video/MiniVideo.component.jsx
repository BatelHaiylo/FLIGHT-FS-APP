import React from 'react';
import HoverVideoPlayer from 'react-hover-video-player';

export default function MiniVideo() {
  return (
    <HoverVideoPlayer
      videoSrc="\video\south-african.mp4"
      pausedOverlay={
        <img
          src="https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="travel to south africa"
          style={{
            // Make the image expand to cover the video's dimensions
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      }
      loadingOverlay={
        <div className="loading-overlay">
          <div className="loading-spinner" />
        </div>
      }
    />
  );
}