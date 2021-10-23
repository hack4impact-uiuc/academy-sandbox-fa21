import React from 'react';

function AnthonyGrid(props) {
  const { ImagesArray } = props;
  return (
    <>
      {ImagesArray.map((img, i) => (
        <img className="anthony-images" src={img} alt={i} key={i} />
      ))}
    </>
  );
}

export default AnthonyGrid;
