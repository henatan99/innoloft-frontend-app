import React from "react";
import MainContentImg from "../main.svg";
import EditSection from "./EditSection";
import ContentSection from "./ContentSection";

const MainContentComp = (props) => {
    const { content, type } = props;

    return (
        <div className="flex-grow">
            <div className="w-full">
                <img src={MainContentImg} className="w-full"></img>
            </div>
            <div className="p-4">
                {
                    type === 'edit' ? 
                    <EditSection title={content.title} description={content.description} /> :
                    <ContentSection title={content.title} description={content.description} />
                }
            </div>
        </div>
    )
}

export default MainContentComp;