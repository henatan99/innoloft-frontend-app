import React from "react";
import { useNavigate } from 'react-router-dom';

const MainNavBar = (props) => {
    const {leftComp, edit} = props;
    const navigate = useNavigate();
    const redirect = () => {
        if(edit) {
            navigate('/product')
        } else {
            navigate('/product/edit')
        }
    }

    return (
        <div className="w-full flex flex-wrap justify-between bg-custom-light-gray py-5">
            {leftComp}
            <button onClick={redirect} className="text-white text-xs bg-custom-blue px-2 py-1 rounded-md">
                {edit ? 'View Offer': 'Edit'}
            </button>

        </div>
    )
}

export default MainNavBar;