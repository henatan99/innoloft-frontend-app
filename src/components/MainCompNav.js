import React from "react";
import { RiHomeLine } from "react-icons/ri"
import { Link } from 'react-router-dom';


const MainCompNav = (props) => {
    const {list} = props;
    const textLength = window.innerWidth >= 768 ? 50 : 30;

    const truncateText = (text) => {
        if (text.length > textLength) {
          return text.slice(0, textLength) + '...';
        }
        return text;
    };

    return (
        <div>
            <ul className="flex flex-row items-center opacity-75 text-sm">
                <li className="flex items-center mr-4">
                    <Link to="/">
                        <RiHomeLine />
                    </Link>
                </li>
                {
                    list.length > 0 && 
                    list.map((item, index) => {
                        return (
                            <>
                                <li className="mr-4">&gt;</li>
                                <li className="mr-4"><Link to="/product">{truncateText(item)}</Link></li>
                            </>
                        )
                    })
                }
                <li></li>
            </ul>
        </div>
    )
}

export default MainCompNav;