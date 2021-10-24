import React from 'react';
import '../css/Grace.css';

function GraceVideo(props) {
  const { url } = props;
  return (
    <>
      <iframe
        width="395"
        height="250"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </>
  );
}

export default GraceVideo;
