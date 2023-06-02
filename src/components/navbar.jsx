import React from "react";
import {Link} from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import { Login } from "../pages/login/login";


export const Navbar = () => {
    const { itemsAmount, resetShop } = useContext(ShopContext);

    return (
        <div className="sticky top-0 bg-slate-800 flex justify-center w-full py-7 z-10 ">
            <div className="text-cyan-50 flex justify-between w-11/12">
                <Link className="text-xl flex justify-center items-center gap-4 font-rowdies hover:text-gray-300" to="/" onClick={resetShop}> <img className="w-12" src="/bridge4.png" alt="" /> Cosmere Collection </Link>
                <div className="flex items-center gap-12">
                    <Link to="/login">  
                        <div className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                            Login
                        </div>
                    </Link>
                    <Link className="flex justify-center items-center gap-2 hover:opacity-50" to="/cart">
                        <ShoppingCart size={32} />
                        { itemsAmount > 0 ? <p className="text-black font-bold font-poppins bg-yellow-200 rounded-full px-2 text-xs self-start">{itemsAmount}</p> : null} 
                    </Link>
                </div>

            </div>
        </div>
    );
}