import React from "react";
import LogoWhite from "../logo_innoloft_white.svg";
import Profile from "../profile.jpg";
import { AiOutlineMessage } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';
import {CiSearch} from 'react-icons/ci';

const Header = () => {
    return (
        <header className="flex flex-row items-center w-full px-[12%] py-3 bg-custom-blue">
            <div className="w-28 flex flex-row items-center">
                <img src={LogoWhite} alt="logo"></img>
            </div>
            <div className="relative ml-[10%] w-[40%] hidden md:flex items-center">
                <input 
                    type="text"
                    placeholder="Enter interests, keyword, company name, etc."
                    className="leading-tight pl-2 pr-6 py-1 rounded-md border border-gray-300 w-full focus-outline-none"
                />
                <button className="absolute right-0 mr-2">
                    <CiSearch />
                </button>
            </div>
            <nav className="ml-auto hidden md:block">
                <ul className="flex flex-row text-white justify-between items-center w-40">
                    <li className="flex flex-row items-center">
                        <button className="">
                            <AiOutlineMessage size={14}/>
                        </button>
                    </li>
                    <li className="flex flex-row items-center">
                        <span className="w-6">EN</span>
                        <button>
                            <MdExpandMore size={24}/>
                        </button>  
                    </li>
                    <li className="flex flex-row items-center">
                        <button>
                            <IoMdNotificationsOutline size={16}/>
                        </button>
                    </li>
                    <li className="flex flex-row items-center">
                        <div className="w-6 h-6 overflow-hidden rounded-full">
                            <img src={Profile} ></img>
                        </div>
                        <button>
                            <MdExpandMore size={24}/>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;