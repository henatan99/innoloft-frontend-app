import React from "react";
import { FaBold } from 'react-icons/fa';
import { TbItalic } from 'react-icons/tb';
import { 
    AiOutlineUnorderedList, 
    AiOutlineOrderedList, 
} from 'react-icons/ai';
import { GoLink, GoUnlink } from 'react-icons/go';

import { CiUndo, CiRedo } from 'react-icons/ci';
import { BsTextIndentLeft, BsTextIndentRight } from 'react-icons/bs';


import { BsTextLeft, BsTextRight, BsTextCenter, BsJustify } from 'react-icons/bs';

const CustomEditor = () => {
    return (
        <div>
            <ul className="flex flex-row">
                <li className="bg-custom-gray p-3"><button><FaBold /></button></li>
                <li><button><TbItalic /></button></li>
                <li><button><AiOutlineUnorderedList /></button></li>
                <li><button><AiOutlineOrderedList /></button></li>
                <li><button><BsTextIndentLeft /></button></li>
                <li><button><BsTextIndentRight /></button></li>
                <li><button><BsTextLeft /></button></li>
                <li><button><BsTextCenter /></button></li>
                <li><button><BsTextRight /></button></li>
                <li><button><BsJustify /></button></li>
                <li><button><GoLink /></button></li>
                <li><button><GoUnlink /></button></li>
                <li><button><CiUndo /></button></li>
                <li><button><CiRedo /></button></li>
            </ul>

            <div>

            </div>
        </div>
    )
}

export default CustomEditor;