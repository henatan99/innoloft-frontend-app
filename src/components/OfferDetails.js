import React from "react";
// import { BiClock, BiGear } from 'react-icons/bi';
import { FaChessKnight } from 'react-icons/fa';
// import { GiMoneyBag } from 'react-icons/gi';
import { PiGear, PiGearSix } from 'react-icons/pi';

const OfferDetailItem = (props) => {
    const { category, icon, list, type} = props;
    return (
        <div className="flex items-left opacity-75">
            <div className="">
                {icon}
            </div>
            <div className="flex flex-col mx-3">
                <span className="text-left text-sm" style={{lineHeight: 'normal'}}>{category}</span>
                <ul className="flex my-3 flex-wrap">
                    {
                        list.length > 0 &&
                        list.map(
                            item => 
                            <li  className="px-3 py-1 mr-2 mb-3 rounded-full bg-custom-gray flex flex-row text-xs opacity-75">
                                {
                                    type === 'edit' ? 
                                    <>
                                        <div className="" contentEditable="true">
                                            {item}
                                        </div>
                                        <button className="text-red-400 px-1 ml-1">X</button>
                                    </>
                                     :
                                    item
                                }    
                            </li>)
                    }
                    <button className="bg-custom-blue text-white inline-block w-[20px] h-[20px] rounded-full text-xs">+</button>
                </ul>
            </div>
        </div>
    )
}

const OfferDetails = (props) => {
    const {offerDetails, type} = props;
    const cats = [
        {icon: <PiGear />, category: 'Technology', details: offerDetails.technology},
        {icon: <FaChessKnight />, category: 'Business Model', details: offerDetails.businessModel},
        {icon: <PiGear />, category: 'TRL', details: offerDetails.trl},
        {icon: <PiGear />, category: 'Costs', details: offerDetails.costs},
    ];

    return (
        <div>
            <h2 className="text-left py-2">Offer Details</h2>

            <div>
                <ul className="flex flex-wrap">
                    {
                        cats.map(cat => {
                            return (
                                <li className="w-full lg:w-[50%]">
                                    <OfferDetailItem 
                                        category={cat.category}
                                        icon={cat.icon}
                                        list={cat.details.list}
                                        type={type}
                                    />
                                </li>
                            )
                        })
                    }
                    {
                        type === 'edit' && 
                        <button className="bg-custom-blue px-2 py-1 text-white inline-block w-full lg:w-[50%] rounded-md text-sm"> 
                            Add Catgory
                        </button>
                    }
                </ul>
                
            </div>
            
        </div>
    )
}

export default OfferDetails;