import React from "react";

const ContentSection = (props) => {

    const {title, description} = props;
    return (
        <div className="text-left">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ContentSection;