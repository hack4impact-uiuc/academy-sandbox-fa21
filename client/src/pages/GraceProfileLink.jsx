import React from 'react';
import '../css/Grace.css';

function GraceProfileLink(props) {
  const { url, description } = props;
  return (
    <p>
      {' '}
      <a href={url} className="gz-link" target="_blank" rel="noreferrer">
        {description}
      </a>
    </p>
  );
}

export default GraceProfileLink;
