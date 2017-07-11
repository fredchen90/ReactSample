import React from 'react';

const VideoListItem = (props) => {
	console.log(props.video);
	return <li>{props.video.snippet.title}</li>
};

export default VideoListItem;