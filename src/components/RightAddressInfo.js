import React from "react";
import InnoloftLogo from "../logo_innoloft.svg";
import Profile from "../profile.jpg";
import MapComponent from "./MapComponent";

const RightAddressInfo = () => {
    return (
        <div className="p-8 w-80 text-left">
            <span className="my-4 mr-auto">Offered By</span>
            <div className="my-4">
                <div className="w-40 mb-3">
                    <img src={InnoloftLogo}></img>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img src={Profile}>
                    </img>
                    </div>
                    
                    <div className="flex flex-col items-start ml-5">
                        <span>Sven Pietsch</span>
                        <span>Innoloft Gmbh</span>
                    </div>
                </div>
            </div>
            <div className="w-full relative my-4">
                <MapComponent lat={0} lng={0} />
            </div>
        </div>
    )
}

export default RightAddressInfo;