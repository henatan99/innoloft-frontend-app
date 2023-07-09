import React from "react";
import InnoloftLogo from "../logo_innoloft.svg";
import Profile from "../profile.jpg";
import MapComponent from "./MapComponent";

const RightAddressInfo = () => {
    return (
        <div className="p-8 w-full lg:w-80 text-left">
            <span className="my-4 mr-auto text-sm">Offered By</span>
            <div className="my-4">
                <div className="w-36 mb-3">
                    <img src={InnoloftLogo}></img>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                        <img src={Profile}>
                    </img>
                    </div>
                    
                    <div className="flex flex-col items-start ml-5 text-xs opacity-75">
                        <span className="font-bold">Sven Pietsch</span>
                        <span>Innoloft Gmbh</span>
                    </div>
                </div>
            </div>
            <div className="w-full relative my-4 h-[200px]">
                <MapComponent lat={50.775555} lng={6.083611} />
            </div>
        </div>
    )
}

export default RightAddressInfo;