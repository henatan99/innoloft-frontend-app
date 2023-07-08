import React from "react";

const MainNavBar = (props) => {
    const {leftComp, btnText} = props;

    return (
        <div className="w-full flex flex-wrap justify-between bg-custom-light-gray py-5">
            {leftComp}
            <button className="text-white text-sm bg-custom-blue px-2 py-1 rounded-md">
                {btnText}
            </button>

        </div>
    )
}

export default MainNavBar;