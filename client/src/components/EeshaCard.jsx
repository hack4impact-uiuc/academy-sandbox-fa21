import React from 'react';

import '../css/Eesha.css';

function EeshaCard (props) {

    var {image, header, desc1, desc2} = props;
    return (
        <div>
            <img src={image} alt="eesha-card" /> 
            <p className="eesha-sign-chart-h1">{header}</p>
            <p className="eesha-sign-chart-h2">{desc1}</p>
            <p className="eesha-sign-chart-h2">{desc2}</p>
        </div>
    );
}

export default EeshaCard;