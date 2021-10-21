import React from 'react';

function GraceVideo(prop) {
    const {
        url,
    } = prop;
    return (
        <div>
            <iframe
                width="390"
                height="250"
                src={url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>
    );
}

export default GraceVideo;