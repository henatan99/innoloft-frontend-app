import './video.css';
import React from "react";
import ReactPlayer from "react-player";

const VideoSection = (props) => {
    const {type} = props;
    const videoUrl = 'https://www.youtube.com/watch?v=h9bILMCzxY4';
    return (
            
        <div>
            <h2 className="text-left py-2">Video</h2>
            {
                type === 'edit' ?
 
                <div className="video mx-auto min-w-[60%] lg:max-w-[60%] w-auto">
                    <ReactPlayer url={videoUrl} className="player" controls/>
                </div>
                
                :
                <div>
                    <input 
                        placeholder="Add a youtube or vimeo link" 
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                </div>
            }
        </div>
    )
}

export default VideoSection;