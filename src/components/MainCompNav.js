import React from "react";
import { RiHomeLine } from "react-icons/ri"

const MainCompNav = (props) => {
    const {list} = props;
    return (
        <div>
            <ul className="flex flex-row items-center">
                <li className="flex items-center mr-4"><a href=""><RiHomeLine /></a></li>
                {
                    list.length > 0 && 
                    list.map((item, index) => {
                        return (
                            <>
                                <li className="mr-4">&gt;</li>
                                <li className="mr-4"><a href="">{item}</a></li>
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