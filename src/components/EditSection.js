import React from "react";

const EditSection = (props) => {

    const {title, description} = props;
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default EditSection;