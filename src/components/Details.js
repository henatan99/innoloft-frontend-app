import React, { useState, useEffect } from "react";
// import { BiClock, BiGear } from 'react-icons/bi';
import { FaChessKnight } from 'react-icons/fa';
// import { GiMoneyBag } from 'react-icons/gi';
import { PiGear } from 'react-icons/pi';
import { MdExpandMore } from 'react-icons/md';

const ProductDetails = (props) => {
    const {product, edit, trls, editProduct} = props;

    const [categories, setCategories] = useState(product.categories);
    const [businessModels, setbusinessModels] = useState(product.businessModels);
    const [trl, setTrl] = useState(product.trl);
    const [investmentEffort, setInvestmentEffort] = useState([{name: product.investmentEffort}]);

    const cats = [
        {id: 0, icon: <PiGear />, name: 'Technology', state: categories, setState: setCategories},
        {id: 1, icon: <FaChessKnight />, name: 'Business Model', state: businessModels, setState: setbusinessModels},
        {id: 2, icon: <PiGear />, name: 'TRL', state: trl, setState: setTrl},
        {id: 3, icon: <PiGear />, name: 'Costs', state: investmentEffort, setState: setInvestmentEffort},
    ];

    const handleEdit = (e, cat, id) => {
        const updatedState = cat.state.map(item => {
            if (item.id === id) {
              return { ...item, name: e.target.textContent }; // Perform the desired changes here
            }
            return item;
        });
          
        cat.setState(updatedState);
    }

    const handleDelete = (cat, id) => {
        const updatedState = cat.state.filter(item => item.id !== id);
        cat.setState(updatedState)
    }

    const handleAdd = (cat) => {
        const updatedState = [...cat.state, {id: cat.state.length, name: ''}];
        cat.setState(updatedState)
    }

    const [dropdown, setDropdown] = useState(false);
    const [isDropdownUp, setIsDropdownUp] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    
    const toggleDropdown = () => {
        setDropdown(!dropdown)
    }

    const handleClick = (id) => {
        setIsClicked(true);
        const trlSelected = trls.find((trl) => trl.id === id)
        setTrl(trlSelected);
        setTimeout(() => {
          setIsClicked(false);
          setDropdown(false);
        }, 200);
    };

    const handleEditProduct = () => {
        editProduct('1598', {
            ...product,
            categories: categories,
            businessModels: businessModels,
            trl: trl,
            investmentEffort: investmentEffort[0].name
        });
    }

    const handleCancelEditProduct = () => {
        setCategories(product.categories);
        setbusinessModels(product.businessModels);
        setTrl(product.trl);
        setInvestmentEffort([{name: product.investmentEffort}]);
    }

    useEffect(() => {
        const handleCurrentScroll = () => {
            const dropdownElem = document.getElementById('dropdown');
            const dropdownArea = dropdownElem.getBoundingClientRect();
            const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

            setIsDropdownUp(dropdownArea.bottom + currentPosition > window.innerHeight);
        };

        edit && window.addEventListener('scroll', handleCurrentScroll);
        return () => {
            edit && window.removeEventListener('scroll', handleCurrentScroll);
        };
    }, []);

    return (
        <div>
            <ul className="flex flex-wrap">
                {
                    cats && cats.length > 0 && 
                    cats.map((cat) => (
                        <li className="w-full lg:w-[50%]">
                            {
                                cat.name === 'TRL' ? 
                                <div className="flex items-left opacity-75">
                                    <div className=""> {cat.icon} </div>
                                    <div className="flex flex-col mx-3 w-full">
                                        <span className="text-left text-sm" style={{lineHeight: 'normal'}}>{cat.name}</span>

                                        <div id="dropdown" className="relative">
                                            {edit && <button onClick={toggleDropdown} className="absolute  right-0 z-50"><MdExpandMore /></button>}
                                            {
                                                edit && dropdown ? 
                                                <>
                                                    <ul className={`absolute ${isDropdownUp ? 'bottom-0' : 'top-0'} bg-custom-gray z-10 text-left opacity-100 text-xs rounded-md`}>
                                                        {trls && trls.length > 0 &&
                                                        trls.map((trl) => 
                                                            <li 
                                                                value={trl}
                                                                onClick={() => handleClick(trl.id)} 
                                                                className={`m-1 p-2 opacity-75 bg-white cursor-pointer rounded-lg hover:bg-blue-300 focus:border-blue-500 transition-colors ${isClicked ? 'bg-gray-200' : 'bg-gray-300 text-gray-700'}`} 
                                                                type="button" 
                                                            >
                                                                    {trl.name}
                                                            </li>
                                                        )}
                                                    </ul> 
                                                    <div className="px-3 py-1 mr-2 mb-3 rounded-full bg-custom-gray flex flex-row text-xs opacity-75">{trl.name}</div>
                                                </> :
                                                <div className="px-3 py-1 mr-2 mb-3 rounded-full bg-custom-gray flex flex-row text-xs opacity-75">{trl.name}</div>

                                            }
                                        </div>
                                    </div>
                                </div>
                                :
                                
                                <div className="flex items-left opacity-75">
                                    <div className="">
                                        {cat.icon}
                                    </div>
                                    <div className="flex flex-col mx-3">
                                        <span className="text-left text-sm" style={{lineHeight: 'normal'}}>{cat.name}</span>
                                        <ul className="flex my-3 flex-wrap" id={`${cat.id}`}>
                                            {
                                                cat.state && cat.state.length > 0 &&
                                                cat.state.map(
                                                    item => 
                                                    <li  className="px-3 py-1 mr-2 mb-3 rounded-full bg-custom-gray flex flex-row text-xs opacity-75">
                                                        {
                                                            edit ? 
                                                            <>
                                                                <div onBlur={(e) => handleEdit(e, cat, item.id)}  className="" contentEditable="true">
                                                                    {item.name}
                                                                </div>
                                                                <button onClick={() => handleDelete(cat, item.id)} className="text-red-400 px-1 ml-1">X</button>
                                                            </>
                                                            :
                                                            item.name
                                                        }    
                                                    </li>)
                                            }
                                            {
                                                edit &&
                                                 <button onClick={() => handleAdd(cat)} className="bg-custom-blue text-white inline-block w-[20px] h-[20px] rounded-full text-xs">+</button>
                                            }
                                            
                                        </ul>
                                    </div>
                                </div>
                            }
                        </li>
                    ))
                }
                {
                    edit && 
                    <>
                        <div className="w-full lg:w-[50%] my-2">
                            <button onClick={handleEditProduct} className="bg-custom-blue px-2 py-1 text-white inline-block w-full lg:w-[80%] rounded-md text-sm opacity-75"> 
                                Save
                            </button>
                        </div>
                        <div className="w-full lg:w-[50%] my-2">
                            <button onClick={handleCancelEditProduct} className="bg-red-500 px-2 py-1 text-white inline-block w-full lg:w-[80%] rounded-md text-sm opacity-75"> 
                                Cancel
                            </button>
                        </div>
                    </>
                    
                }
            </ul>
            
        </div>
    )
}

export default ProductDetails;