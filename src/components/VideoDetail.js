import React from 'react';

const VideoDetail = ({ video }) => {

    const urlyouTubeEmbed = "https://youtube.com/embed/";
    if (!video)
    {
        return <div>Waiting you choice a video...</div>
    }

    return (
        <div>
        <div className="ui embed">
            <iframe title={video.snippet.title} src={urlyouTubeEmbed + video.id.videoId} />
        </div>
        <div className="ui segment">
            <h4>{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
        </div>
    );
}

export default VideoDetail;