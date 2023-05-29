import React from "react";
import {Link} from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";


export const Navbar = () => {
    const { itemsAmount } = useContext(ShopContext);

    return (
        <div className="sticky top-0 bg-slate-800 flex justify-center w-full py-7">
            <div className="text-cyan-50 flex justify-between w-11/12">
                <Link className="text-xl flex justify-center items-center gap-4 font-rowdies hover:text-gray-300" to="/"> <img className="w-12" src="/bridge4.png" alt="" /> Cosmere Books Shop </Link>
                <Link className="flex justify-center items-center gap-2 hover:opacity-50" to="/cart">
                    <ShoppingCart size={32} />
                    { itemsAmount > 0 ? <p className="text-black font-bold font-poppins bg-yellow-200 rounded-full px-2 text-xs self-start">{itemsAmount}</p> : null} 
                </Link>
            </div>
        </div>
    );
}