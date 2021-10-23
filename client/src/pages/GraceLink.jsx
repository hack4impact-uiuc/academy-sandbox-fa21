import React from 'react';
import '../css/Grace.css';

function GraceLink(props) {
  const { link, description } = props;
  return (
    <p>
      {' '}
      <a href={link} className="link" target="_blank" rel="noreferrer">
        {description}
      </a>
    </p>
  );
}

export default GraceLink;
