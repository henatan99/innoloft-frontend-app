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

                // <iframe 
                //     className="min-w-[60%] max-w-full mx-auto" 
                //     src={videoUrl}
                //     title="YouTube Video"
                //     frameBorder="0"
                //     allow="autoplay; encrypted-media"
                //     allowFullScreen
                // >
                //     {/* <source src={videoUrl} type="video/mp4" /> */}
                //     {/* Add additional source elements for different video formats */}
                //     {/* Your browser does not support the video tag. */}
                // </iframe> 
                <div className="mx-auto min-w-[60%] max-w-full">
                    <ReactPlayer url={videoUrl} style={{margin: 'auto'}}/>
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