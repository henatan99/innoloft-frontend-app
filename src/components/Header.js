import React from "react";
import LogoWhite from "../logo_innoloft_white.svg";
import Profile from "../profile.jpg";
import { AiOutlineMessage } from 'react-icons/ai';
import { MdExpandMore } from 'react-icons/md';
import { IoMdNotificationsOutline } from 'react-icons/io';

const Header = () => {
    return (
        <header className="flex flex-row w-full px-[12%] py-3 bg-custom-blue">
            <div className="w-28 flex flex-row items-center">
                <img src={LogoWhite} alt="logo"></img>
            </div>
            <div></div>
            <nav className="ml-auto">
                <ul className="flex flex-row text-white justify-between items-center w-48">
                    <li className="flex flex-row items-center">
                        <button className="">
                            <AiOutlineMessage size={16}/>
                        </button>
                    </li>
                    <li className="flex flex-row items-center">
                        <span className="w-8">EN</span>
                        <button>
                            <MdExpandMore size={24}/>
                        </button>  
                    </li>
                    <li className="flex flex-row items-center">
                        <button>
                            <IoMdNotificationsOutline size={18}/>
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