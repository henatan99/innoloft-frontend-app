import React from "react";
import Profile from "../profile.jpg"
import { RiHomeLine } from "react-icons/ri"
import { HiOutlineUsers } from "react-icons/hi";
import {TbBinaryTree2} from "react-icons/tb";
import { MdExpandMore } from 'react-icons/md';

const LeftNav = () => {

    return (
        <div className="px-4 py-8 w-72">
            <div className="flex flex-row items-center">
                <div className="w-16 h-16 rounded-full overflow-hidden"><img src={Profile}></img></div>
                
                <div className="flex flex-col items-start ml-5">
                    <span className="text-lg">Sven Pietsch</span>
                    <span className="text-xs opacity-75">Innoloft Gmbh</span>
                </div>
            </div>
            <ul className="text-sm opacity-75">
                <li className="flex flex-row items-center my-4">
                    <RiHomeLine />
                    <a className="ml-3">Home</a>
                </li>
                <li className="flex flex-row items-center my-4">
                    <HiOutlineUsers />
                    <a className="ml-3">Members</a>
                </li>
                <li className="flex flex-row items-center my-4">
                    <TbBinaryTree2 />
                    <button className="ml-3" >Organizations</button>
                    <MdExpandMore size={24} className="ml-auto"/>
                </li>
            </ul>
        </div>
    )
}

export default LeftNav;