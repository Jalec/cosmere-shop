import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from 'react-router-dom';

export const Product = (props) => {
    const {id, productName, price, productImage} = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);

    const cartItemAmount = cartItems[id];
    return (
        <div className="bg-white w-64 h-96 flex flex-col gap-6 justify-center items-center rounded-lg shadow-lg border">
            <Link to={`/product/${id}`}><img src={productImage} alt={productName} className="w-44" /></Link>
            <div className="flex flex-col items-center ">
                <div className="py-3 font-poppins">
                <Link to={`/product/${id}`}><p className="text-blue-700 text-center text-l hover:text-blue-300"><b>{productName}</b></p></Link>
                    <p className="text-gray-700 text-center"> ${price}</p>
                </div>
                <button className="flex justify-center items-center px-6 py-3 border-0 rounded-xl bg-slate-800 shadow-sm tracking-wider uppercase text-sm font-medium text-white transition-all duration-300 hover:letter-spacing-3 hover:bg-indigo-400 hover:text-blue-950 hover:shadow-lg active:letter-spacing-3 active:bg-indigo-600 active:text-white active:shadow-none active:translate-y-5 active:transition-100 font-poppins" onClick={() => addToCart(id)}> 
                    Add to Cart  {cartItemAmount > 0 && <> ({cartItemAmount}) </> }
                </button>
            </div>
        </div>
    )
}