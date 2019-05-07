import React from 'react';
import '../css/videoItem.css';

const VideoItem = ({ video, onVideoSelected }) => {
    return (
        <div className="video-item item" onClick={() => { onVideoSelected(video) }}>
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;