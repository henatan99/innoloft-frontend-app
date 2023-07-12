import React from "react";
import InnoloftLogo from "../logo_innoloft.svg";
import Profile from "../profile.jpg";
import MapComponent from "./MapComponent";

const RightAddressInfo = (props) => {
    const {logo, profilePicture, firstName, lastName, companyName, lat, lng, street, city, country} = props;
    return (
        <div className="p-8 w-full lg:w-80 text-left">
            <span className="my-4 mr-auto text-sm">Offered By</span>
            <div className="my-4">
                <div className="w-36 mb-3">
                    <img src={logo}></img>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={profilePicture}>
                        </img>
                    </div>
                    <div className="flex flex-col items-start ml-5 text-xs opacity-75">
                        <span className="font-bold">{`${firstName} ${lastName}`}</span>
                        <span>{companyName}</span>
                    </div>
                </div>
            </div>
            <span className="text-sm opacity-75">{`${street}, ${city}, ${country}`}</span>
            <div className="w-full relative my-4 h-[200px]">
                <MapComponent lat={lat} lng={lng} />
            </div>
        </div>
    )
}

export default RightAddressInfo;