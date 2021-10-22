import React from 'react';

function ImagesGrid(props) {
  const { arr } = props;
  return (
    <>
      {arr.map(
          (img, i) => (
        <img className="anthony-images" src={img} alt={i} key={i} />
      )
      )}
    </>
  );
}

export default ImagesGrid;