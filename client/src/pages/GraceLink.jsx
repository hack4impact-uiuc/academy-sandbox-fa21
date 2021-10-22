import React from 'react';
import '../css/Grace.css';

function GraceLink(props) {
    const {
        link,
        description,
    } = props;
    return (
        <p> <a href={link} className="link">{description}</a></p>
    );
}

export default GraceLink;